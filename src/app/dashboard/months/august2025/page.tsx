 "use client"

import * as React from "react"
import Image from 'next/image'
import blog2025 from '/public/imagesresized/blog2025.png';
import London16082025Titled from '/public/imagesresized/London16082025Titled.jpg';
import dinosaurrEvolutionTitled from '/public/imagesresized/dinosaurrEvolutionTitled.jpg';
import Muncaster23082025Titled from '/public/imagesresized/Muncaster23082025Titled.jpg';
import HMSVictoryTitled from '/public/imagesresized/HMSVictoryTitled.jpg';
import StonehengeTitled from '/public/imagesresized/StonehengeTitled.jpg'
import Link from 'next/link'

import August2025 from "@/components/ui/August2025";

export default function Page() {
    return (  
<div className="col-span-1 md:col-span-2 p-2 gap-3 bg-[#90AEAD]">
    <div>
    <August2025 />
    
    </div>
    </div>
    );
}