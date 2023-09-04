import NextHead from "next/head";
import React from "react";
import app from '@/app.config';
import Script from "next/script";

export default function Layout({
    children,
    title,
}: {
    children: React.ReactNode;
    title: string;
}) {
    return (
        <>
            <NextHead>
                <link rel="icon" href={app.icon} />
                <title>{title}</title>
                <meta name="description" content={app.desc} />
                <meta property="og:site_name" content={app.title} />
                <meta property="og:description" content={app.desc} />
                <meta property="og:title" content={app.title} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={app.title} />
                {app.pwa && (
                    <link rel="manifest" href="/manifest.json" />
                )}
                <meta name="twitter:description" content={app.desc} />
                {app.analytics && app.analytics.provider === 'umami' && (
                    <Script
                        src={app.analytics.umamiConfig.scriptUrl}
                        strategy='afterInteractive'
                        data-website-id={app.analytics.umamiConfig.websiteId}
                    />
                )}
                {app.analytics && app.analytics.provider === 'ga' && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${app.analytics.gaConfig.measurementId}`}
                        />
                        <Script strategy='lazyOnload' id='ga'>
                            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${app.analytics.gaConfig.measurementId}', {
                  page_path: window.location.pathname,
                });
                `}
                        </Script>
                    </>
                )}
            </NextHead>
            <div className="relative flex flex-col h-screen">
                <main className="mx-auto max-w-[1960px] p-4">
                    {children}
                </main>
            </div>
        </>
    );
}