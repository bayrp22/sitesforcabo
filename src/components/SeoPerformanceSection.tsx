import { CheckIcon, BoltIcon, GlobeAltIcon, DocumentTextIcon, ChartBarIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import SectionContainer from "./SectionContainer";

export default function SeoPerformanceSection() {
  return (
    <SectionContainer id="seo-performance" bgColor="bg-white py-16 mt-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Basic SEO &amp; Performance</h2>
        <p className="mt-2 text-lg text-gray-600">
          Core optimizations to boost visibility and speed
        </p>
        <div className="w-16 h-1 bg-blue-500 rounded mt-4 mx-auto"></div>
      </div>
      
      {/* Features grid with subtle background */}
      <div className="bg-gray-50 rounded-lg p-8 border border-gray-100">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Fast Loading */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <BoltIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Fast loading</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Server-Side Rendering & Incremental Static Regeneration</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Lazy-load images & assets via Next.js Image component</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Analytics setup */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <ChartBarIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Analytics setup</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Domain & SSL provisioning</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Google Analytics install or link to existing ID</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Essential metadata */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <DocumentTextIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Essential metadata</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Custom page titles & meta descriptions</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Open Graph social preview tags</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Performance foundations */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <CpuChipIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Performance foundations</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Code-splitting & bundle reduction</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Automated Core Web Vitals checks</span>
                </li>
              </ul>
            </div>
          </div>
          {/* International ready */}
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <GlobeAltIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">International ready</h3>
              <ul className="mt-2 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Basic locale detection & routing</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2" />  
                  <span className="text-base text-gray-700">Hreflang tags for multi-language URLs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scalable & Extendable callout */}
      <div className="bg-blue-50 p-6 rounded-lg mt-10 border border-blue-100 shadow-sm">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <CheckIcon className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">Scalable & Extendable</h3>
            <p className="mt-2 text-base text-gray-700">
              These core services lay the groundwork; as Needs grow, we can layer on advanced SEO, schema markup, content strategy, and more.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
} 