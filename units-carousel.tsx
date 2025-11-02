"use client"

import { useState, useRef } from "react"
import { UnitCard } from "@/components/unit-card"
import { ChevronLeft, ChevronRight } from "@/components/icons"

const unitsData = {
  "1-bedroom": [
    {
      unitNo: "101",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 47,
      color: "#7FD957",
      status: "Available",
      price: "R1,600,000",
      images: [
        "/images/units/101-a.jpg",
        "/images/units/101-b.jpg",
        "/images/units/101-c.jpg",
        "/images/units/101-d.jpg",
      ],
    },
    {
      unitNo: "103",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 45,
      color: "#F4E96D",
      status: "Available",
      price: "R1,600,000",
      images: [
        "/images/units/103-a.jpg",
        "/images/units/103-b.jpg",
        "/images/units/103-c.jpg",
        "/images/units/103-d.jpg",
        "/images/units/103-e.jpg",
      ],
    },
    {
      unitNo: "104",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 48,
      color: "#FF6B6B",
      status: "Under Offer",
      price: "R1,600,000",
      images: [
        "/images/units/104-a.jpg",
        "/images/units/104-b.jpg",
        "/images/units/104-c.jpg",
        "/images/units/104-d.jpg",
        "/images/units/104-e.jpg",
      ],
    },
    {
      unitNo: "105",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 48,
      color: "#FF6B6B",
      status: "Available",
      price: "R1,600,000",
      images: [
        "/images/units/105-a.jpg",
        "/images/units/105-b.jpg",
        "/images/units/105-c.jpg",
        "/images/units/105-d.jpg",
      ],
    },
    {
      unitNo: "106",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 45,
      color: "#F4E96D",
      status: "Available",
      price: "R1,500,000",
      images: [
        "/images/units/106-a.jpg",
        "/images/units/106-b.jpg",
        "/images/units/106-c.jpg",
        "/images/units/106-d.jpg",
        "/images/units/106-e.jpg",
      ],
    },
    {
      unitNo: "108",
      floor: "First",
      bedrooms: 1,
      bathrooms: 1,
      size: 47,
      color: "#7FD957",
      status: "Available",
      price: "R1,600,000",
      images: ["/images/units/108-a.jpg"],
    },
    {
      unitNo: "201",
      floor: "Second",
      bedrooms: 1,
      bathrooms: 1,
      size: 47,
      color: "#7FD957",
      status: "Available",
      price: "R1,600,000",
      images: [
        "/images/units/201-a.jpg",
        "/images/units/201-b.jpg",
        "/images/units/201-c.jpg",
        "/images/units/201-d.jpg",
      ],
    },
    {
      unitNo: "203",
      floor: "Second",
      bedrooms: 1,
      bathrooms: 1,
      size: 45,
      color: "#F4E96D",
      status: "Available",
      price: "R1,500,000",
      images: [
        "/images/units/203-a.jpg",
        "/images/units/203-b.jpg",
        "/images/units/203-c.jpg",
        "/images/units/203-d.jpg",
        "/images/units/203-e.jpg",
      ],
    },
    {
      unitNo: "204",
      floor: "Second",
      bedrooms: 1,
      bathrooms: 1,
      size: 48,
      color: "#FF6B6B",
      status: "Available",
      price: "R1,600,000",
      images: [
        "/images/units/204-a.jpg",
        "/images/units/204-b.jpg",
        "/images/units/204-c.jpg",
        "/images/units/204-d.jpg",
        "/images/units/204-e.jpg",
      ],
    },
    {
      unitNo: "205",
      floor: "Second",
      bedrooms: 1,
      bathrooms: 1,
      size: 48,
      color: "#FF6B6B",
      status: "Available",
      price: "R1,600,000",
      images: [
        "/images/units/205-a.jpg",
        "/images/units/205-b.png",
        "/images/units/205-c.jpg",
        "/images/units/205-d.jpg",
        "/images/units/205-e.png",
      ],
    },
    {
      unitNo: "206",
      floor: "Second",
      bedrooms: 1,
      bathrooms: 1,
      size: 45,
      color: "#F4E96D",
      status: "Sold",
      price: "SOLD",
      images: [
        "/images/units/206-a.jpg",
        "/images/units/206-b.jpg",
        "/images/units/206-c.jpg",
        "/images/units/206-d.jpg",
        "/images/units/206-e.jpg", // Added 5th image
      ],
    },
    {
      unitNo: "208",
      floor: "Second",
      bedrooms: 1,
      bathrooms: 1,
      size: 47,
      color: "#7FD957",
      status: "Available",
      price: "R1,600,000",
      images: [
        "/images/units/208-a.jpg",
        "/images/units/208-b.jpg",
        "/images/units/208-c.jpg",
        "/images/units/208-d.jpg",
      ],
    },
  ],
  "2-bedroom": [
    {
      unitNo: "102",
      floor: "First",
      bedrooms: 2,
      bathrooms: 1,
      size: 67,
      color: "#F4C89D",
      status: "Available",
      price: "R2,100,000",
      images: [
        "/images/units/102-a.jpg",
        "/images/units/102-b.jpg",
        "/images/units/102-c.jpg",
        "/images/units/102-d.jpg",
      ],
    },
    {
      unitNo: "107",
      floor: "First",
      bedrooms: 2,
      bathrooms: 1,
      size: 67,
      color: "#6DC5E8",
      status: "Available",
      price: "R2,100,000",
      images: ["/images/units/107-b.jpg", "/images/units/107-c.jpg", "/images/units/107-d.jpg"],
    },
    {
      unitNo: "202",
      floor: "Second",
      bedrooms: 2,
      bathrooms: 1,
      size: 68, // Updated from 67 to 68 per pricelist
      color: "#F4C89D",
      status: "Available",
      price: "R2,100,000",
      images: [
        "/images/units/202-a.jpg",
        "/images/units/202-b.jpg",
        "/images/units/202-c.jpg",
        "/images/units/202-d.jpg",
      ],
    },
    {
      unitNo: "207",
      floor: "Second",
      bedrooms: 2,
      bathrooms: 1,
      size: 67,
      color: "#6DC5E8",
      status: "Available",
      price: "R2,100,000",
      images: [
        "/images/units/207-a.jpg", // Updated from .png to .jpg
        "/images/units/207-b.jpg", // Updated from .png to .jpg
        "/images/units/207-c.jpg", // Updated from .png to .jpg
        "/images/units/207-d.jpg", // Updated from .png to .jpg
      ],
    },
    {
      unitNo: "301",
      floor: "Third",
      bedrooms: 2,
      bathrooms: 1,
      size: 67,
      color: "#F4C89D",
      status: "Sold",
      price: "SOLD",
      images: [
        "/images/units/301-a.jpg",
        "/images/units/301-b.jpg",
        "/images/units/301-c.jpg",
        "/images/units/301-d.jpg",
        "/images/units/301-e.jpg",
      ],
    },
    {
      unitNo: "306",
      floor: "Third",
      bedrooms: 2,
      bathrooms: 1,
      size: 67,
      color: "#6DC5E8",
      status: "Sold",
      price: "SOLD",
      images: [
        "/images/units/306-a.jpg",
        "/images/units/306-b.jpg",
        "/images/units/306-c.jpg",
        "/images/units/306-d.jpg",
        "/images/units/306-e.jpg",
      ],
    },
  ],
  "2-bedroom-loft": [
    {
      unitNo: "302",
      floor: "Third + Loft",
      bedrooms: 2,
      bathrooms: 2,
      size: 77,
      color: "#9B9FD8",
      status: "Available",
      price: "R2,600,000",
      images: [
        "/images/units/302-a.jpg",
        "/images/units/302-b.jpg",
        "/images/units/302-c.jpg",
        "/images/units/302-d.jpg",
        "/images/units/302-e.jpg",
      ],
    },
    {
      unitNo: "303",
      floor: "Third + Loft",
      bedrooms: 2,
      bathrooms: 2,
      size: 77,
      color: "#F4B4C4",
      status: "Available",
      price: "R2,600,000",
      images: [
        "/images/units/303-a.jpg",
        "/images/units/303-b.jpg",
        "/images/units/303-c.jpg",
        "/images/units/303-d.jpg",
        "/images/units/303-e.jpg",
      ],
    },
    {
      unitNo: "304",
      floor: "Third + Loft",
      bedrooms: 2,
      bathrooms: 2,
      size: 77,
      color: "#9B9FD8",
      status: "Available",
      price: "R2,600,000",
      images: [
        "/images/units/304-a.jpg",
        "/images/units/304-b.jpg",
        "/images/units/304-c.jpg",
        "/images/units/304-d.jpg",
        "/images/units/304-e.jpg",
      ],
    },
    {
      unitNo: "305",
      floor: "Third + Loft",
      bedrooms: 2,
      bathrooms: 2,
      size: 77,
      color: "#F4B4C4",
      status: "Available",
      price: "R2,600,000",
      images: [
        "/images/units/305-a.jpg",
        "/images/units/305-b.jpg",
        "/images/units/305-c.jpg",
        "/images/units/305-d.jpg",
        "/images/units/305-e.jpg",
      ],
    },
  ],
}

export function UnitsCarousel() {
  const [selectedType, setSelectedType] = useState<"1-bedroom" | "2-bedroom" | "2-bedroom-loft">("1-bedroom")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const units = unitsData[selectedType]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  return (
    <div id="properties" className="flex flex-col py-6 sm:py-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6 sm:mb-8 text-gray-900 px-4">
        Available Apartments
      </h2>

      <div className="bg-white rounded-xl p-4 sm:p-6 mb-6 sm:mb-8 mx-4 sm:mx-auto">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3 sm:gap-8">
          {/* 1 Bedroom - Horizontal layout with circles on the right */}
          <button
            onClick={() => setSelectedType("1-bedroom")}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              selectedType === "1-bedroom" ? "bg-gray-100 ring-2 ring-gray-900" : "hover:bg-gray-50"
            }`}
          >
            <div className="text-left">
              <h3 className="text-base font-semibold text-gray-900">1 Bedroom</h3>
              <p className="text-xs text-gray-600">45-48m²</p>
            </div>
            <div className="flex gap-1.5 items-center">
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#7FD957" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">47m²</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#F4E96D" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">45m²</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#FF6B6B" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">48m²</span>
              </div>
            </div>
          </button>

          {/* 2 Bedroom - Horizontal layout with circles on the right */}
          <button
            onClick={() => setSelectedType("2-bedroom")}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              selectedType === "2-bedroom" ? "bg-gray-100 ring-2 ring-gray-900" : "hover:bg-gray-50"
            }`}
          >
            <div className="text-left">
              <h3 className="text-base font-semibold text-gray-900">2 Bedroom</h3>
              <p className="text-xs text-gray-600">67m²</p>
            </div>
            <div className="flex gap-1.5 items-center">
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#F4C89D" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">67m²</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#6DC5E8" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">67m²</span>
              </div>
            </div>
          </button>

          {/* 2 Bedroom Loft - Horizontal layout with circles on the right */}
          <button
            onClick={() => setSelectedType("2-bedroom-loft")}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
              selectedType === "2-bedroom-loft" ? "bg-gray-100 ring-2 ring-gray-900" : "hover:bg-gray-50"
            }`}
          >
            <div className="text-left">
              <h3 className="text-base font-semibold text-gray-900">2 Bedroom Loft</h3>
              <p className="text-xs text-gray-600">77m²</p>
            </div>
            <div className="flex gap-1.5 items-center">
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#9B9FD8" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">77m²</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  className="w-4 h-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: "#F4B4C4" }}
                ></div>
                <span className="text-[8px] mt-0.5 text-gray-700">77m²</span>
              </div>
            </div>
          </button>
        </div>
      </div>

      <div className="relative px-4">
        {/* Left Navigation Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {units?.map((unit, index) => (
            <div key={`${unit.unitNo}-${index}`} className="flex-shrink-0 w-80">
              <UnitCard unit={unit} />
            </div>
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-gray-900" />
        </button>
      </div>
    </div>
  )
}
