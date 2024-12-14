import { ChevronRightIcon } from '@heroicons/react/24/outline'; // Import the ChevronRight icon

export default function Banner() {
  return (
    <div className="bg-[#18cb96] font-google text-white text-center py-2">
      <p className="text-sm font-medium flex items-center justify-center">
        #LearnMoreAboutNewYearDiscount
        <ChevronRightIcon className="ml-2 h-5 w-5" aria-hidden="true" /> {/* Add the ChevronRight icon */}
      </p>
    </div>
  );
}