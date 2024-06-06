import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";


const Layout = ({ children, title }) => {
  title = `Real State GPT - ${title}`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="ChatGPT application built with OpenAI API, Next.js, TypeScript, and TailwindCSS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJmNnMwaGJMelpSdEY3cGwwaGlBbEliNFNYaCJ9?width=200" />
      </Head>

      <Sidebar />

      <main className="pt-12 md:pt-0 md:pl-64 flex flex-col flex-1 h-screen">
        {/* <div className="flex-1">
                    
                    <div className="flex flex-col h-full">
                        {children}
                    </div>
                </div> */}

        <div className="flex-1 p-4 bg-[#2E2E2E] rounded-lg shadow-lg shadow-black m-4 ml-8 ">
          <div className="flex flex-col h-full">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;

