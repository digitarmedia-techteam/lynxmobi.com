"use client";

import React, { useState } from "react";
import { ArrowUpRight, Calendar, Clock, Newspaper } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { RevealElement } from "@/components/RevealElement";
import { ContactCTA } from "@/components/ContactCTA";
import { newsArticlesData } from "@/data/news";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Partnership", "Recognition", "Technology", "Industry Insight"];

  const filteredNews =
    selectedCategory === "All"
      ? newsArticlesData
      : newsArticlesData.filter((a) => a.category === selectedCategory);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-white bg-tech-grid border-b border-slate-200">
        <div className="container-editorial">
          <RevealElement animation="fade-up">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-50 text-[#0052ff] border border-blue-100">
              <Newspaper className="w-3.5 h-3.5" />
              Press & Insights
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#090a10] tracking-tight leading-[1.05] max-w-5xl">
              Good Things Are Happening.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
              Stay informed on our latest Tier-1 platform integrations, industry awards, global expansion milestones, and tactical ad-tech viewpoints.
            </p>
          </RevealElement>

          {/* Filter Pills */}
          <div className="mt-12 flex flex-wrap gap-2 pt-6 border-t border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#0052ff] text-white shadow-md shadow-blue-500/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => (
              <div
                key={article.id}
                className="group flex flex-col justify-between p-8 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#0052ff] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0052ff] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{article.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#090a10] tracking-tight group-hover:text-[#0052ff] transition-colors">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-[#0052ff] transition-colors">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </PageTransition>
  );
}
