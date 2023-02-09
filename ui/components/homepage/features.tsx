import { ChartBarIcon, PaperAirplaneIcon, PencilIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Stock',
    description:
      'Track your cake stock. Know what you can make before you take the order.',
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: 'Customer Designs',
    description:
      'Never get a custom cake design order wrong again. Let you customers design their own cakes.',
    icon: PencilIcon,
  },
  {
    name: 'Financial Tracking',
    description:
      'Evaluate your profits and losses in your own personalized admin dashboard.',
    icon: ChartBarIcon,
  },
  {
    name: 'Automatic Emails',
    description:
      'Confirmation emails automatically sent when you accept a cake order.',
    icon: PaperAirplaneIcon,
  },
]

export default function HPfeatures() {
  return (
    <div className="bg-gray-900 relative isolate overflow-hidden py-24 sm:py-32">
      <div className=" mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          <h2 className="text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl">
            Make your bakery stand out
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-50">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-900">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-200">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              className="absolute bottom-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
    </div>
  )
}
