"use client"
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { experience } from "@/data/experience";
import { useTranslation } from "@/lib/i18n";

export default function Experience() {
    const { t } = useTranslation();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 50%"]
    });

    return (
        <section id="experiencia" ref={containerRef} className="max-w-6xl mx-auto px-4 py-20">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-16 text-center">
                {t("experience.title") || "Experiencia Profesional"}
            </h2>

            <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2" />

                <motion.div
                    style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                    className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-sky-500 -translate-x-1/2 z-10"
                />

                <div className="space-y-12">
                    {experience.map((job, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-start ${isEven ? "md:flex-row-reverse" : ""}`}
                            >
                                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pl-12 text-left" : "md:pr-12 md:text-right"}`}>
                                    <div className="bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 rounded-3xl shadow-sm transition-all duration-300 hover:shadow-md">

                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                                            {t(job.roleKey)}
                                        </h3>
                                        <p className="text-sky-600 dark:text-sky-400 font-semibold text-base mb-4">
                                            {t(job.companyKey)}
                                        </p>

                                        <div className={`flex flex-col gap-1 mb-4 text-xs font-mono text-neutral-500 dark:text-gray-500 ${isEven ? "" : "md:items-end"}`}>
                                            <span>{t(job.periodKey)}</span>
                                            <span>{t(job.locationKey)}</span>
                                        </div>

                                        <p className="text-neutral-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                                            {t(job.descriptionKey)}
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-sky-500 border-4 border-slate-50 dark:border-[#121212] -translate-x-1/2 z-20 shadow-[0_0_12px_rgba(14,165,233,0.6)]" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}