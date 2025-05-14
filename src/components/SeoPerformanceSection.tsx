import { CheckIcon, ServerIcon, GlobeAltIcon, DocumentTextIcon, ChartBarIcon, TrophyIcon, BoltIcon } from "@heroicons/react/24/solid";
import SectionContainer from "./SectionContainer";

export default function SeoPerformanceSection() {
  return (
    <SectionContainer id="seo-performance" bgColor="bg-white py-16 mt-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">SEO &amp; Performance Optimization</h2>
        <p className="mt-2 text-lg text-gray-600">
          Maximize your visibility, speed, and conversions with our best-in-class stack.
        </p>
        <div className="w-16 h-1 bg-blue-500 rounded mt-4 mx-auto"></div>
      </div>
      
      {/* Features grid with subtle background */}
      <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Lightning Fast Pages */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <BoltIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Lightning-Fast Pages</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Server-Side Rendering & Incremental Static Regeneration</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Fluid client-side transitions</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Sub-2s load times via Next.js & App Router</span>
                </li>
              </ul>
            </div>
          </div>
          {/* i18n */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <GlobeAltIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Global Reach</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Automatic locale detection & routing</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Hreflang tags & localized URLs</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Seamless language switching</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Metadata */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <DocumentTextIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Deep-Researched Metadata</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Custom title tags & descriptions</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Schema.org markup for rich snippets</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Keyword-driven optimization</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Analytics */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <ChartBarIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Analytics & Tracking</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Domain & SSL setup</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Google Analytics installation or linking</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Event, goal & ecommerce tracking</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Performance Monitoring */}
          <div className="flex items-start space-x-4 md:col-span-1 lg:col-span-2">
            <div className="bg-blue-100 p-2 rounded-full">
              <CheckIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Ongoing Monitoring</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Automated Core Web Vitals audits</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Lazy-loaded media & code-splitting</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Quarterly performance reviews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Business Impact callout - with visual enhancement */}
      <div className="bg-blue-50 rounded-lg p-8 mt-12 border border-blue-100 sm:max-w-lg md:max-w-2xl mx-auto shadow-sm">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 p-2 rounded-full">
            <TrophyIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">Business Impact</h3>
            <p className="mt-2 text-base">
              Faster load times, higher search rankings, deeper insights—and more bookings, one vessel at a time.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
} 