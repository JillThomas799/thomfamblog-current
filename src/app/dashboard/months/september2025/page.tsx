"use client"

import * as React from "react"
import Image from 'next/image'
import Link from 'next/link'
import WinchesterCathedralTitled from '/public/imagesresized/WinchesterCathedralTitled.jpg';
import HMSWarriorTitled from '/public/imagesresized/HMSWarriorTitled.jpg';
import HMSAllianceTitled from '/public/imagesresized/HMSAllianceTitled.jpg';
import AlnwickCastleTitled from '/public/imagesresized/AlnwickCastleTitled.jpg';
import Newcastle24092025Titled from '/public/imagesresized/Newcastle24092025Titled.jpg';
import DurhamCathedralTitled from '/public/imagesresized/DurhamCathedralTitled.jpg';



import september2025 from "@/components/ui/October2025";
import September2025 from "@/components/ui/September2025";

export default function Page() {
    return (  
<div className="col-span-1 md:col-span-2 p-2 gap-3 bg-[#90AEAD]">
    <div>
    <September2025 />
    
    </div>
    </div>
    );
}