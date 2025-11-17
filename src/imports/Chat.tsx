import svgPaths from "./svg-ecadove9p9";
import imgUser from "figma:asset/32ce3aa341ad8fd346cddf888fc952bab1c52c6e.png";
import imgProfile from "figma:asset/c8bbcf6c3ea8a4b80e457a275b08398724979296.png";
import imgProfile1 from "figma:asset/18a45a6f10fef6c2d478eae0ee596e11ad589577.png";
import imgProfile2 from "figma:asset/ec06d37e513a3a4010b770b2edb5e834377caf4e.png";
import imgProfile3 from "figma:asset/5a513ff776bc8073c15868fff7eb87db65ba2aa1.png";
import imgProfile4 from "figma:asset/db70ecbb5ad12f549c9a4055901f1cf516c91da0.png";
import imgProfile5 from "figma:asset/7fc4069ce6b7607264140ff733a8a48685ac8d87.png";
import imgProfile6 from "figma:asset/383d59a97976a0ce57bc12732f657cff3997dd0e.png";
import imgProfile7 from "figma:asset/2517ad4dbf132ff5b85d46d8ecd49f7393cd37c0.png";
import imgProfile8 from "figma:asset/5af40ebdfc0a84dda49e41cb24e1a063203ad61d.png";
import imgChat from "figma:asset/e3fed51d2dab724ac52277f42875ff3670bc1370.png";

function LogoIconSvg() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="logo-icon.svg">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_490)" id="logo-icon.svg">
          <path d={svgPaths.p302b8500} fill="var(--fill-0, #FF7043)" id="Vector" />
          <g filter="url(#filter0_d_1_490)" id="Group">
            <path d={svgPaths.p270c8780} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
          <g filter="url(#filter1_d_1_490)" id="Group_2">
            <path d={svgPaths.p1d0ddd80} fill="var(--fill-0, white)" fillOpacity="0.9" id="Vector_3" />
          </g>
          <g filter="url(#filter2_d_1_490)" id="Group_3">
            <path d={svgPaths.p3c349f80} fill="var(--fill-0, white)" fillOpacity="0.7" id="Vector_4" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20.5263" id="filter0_d_1_490" width="5.36837" x="7.42383" y="6.2373">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.5" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_490" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_490" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.7894" id="filter1_d_1_490" width="5.3684" x="13.7422" y="12.9727">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.5" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_490" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_490" mode="normal" result="shape" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18" id="filter2_d_1_490" width="5.3684" x="20.0547" y="8.76172">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dy="0.5" />
            <feGaussianBlur stdDeviation="0.5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_490" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_490" mode="normal" result="shape" />
          </filter>
          <clipPath id="clip0_1_490">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LogoIconSvgFill() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[32px]" data-name="logo-icon.svg fill">
      <LogoIconSvg />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[32px] overflow-clip relative shrink-0" data-name="Logo">
      <LogoIconSvgFill />
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <Logo />
    </div>
  );
}

function Container() {
  return (
    <div className="box-border content-stretch flex items-center justify-center pb-[28px] pt-[32px] px-0 relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.pcecda00} fill="var(--fill-0, #98A2B3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <Svg />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.pd8f7900} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg1 />
        </div>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.pa8ab00} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg2 />
        </div>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p7a5f400} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg3 />
        </div>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3bb18b80} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg4 />
        </div>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p17458f00} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg5 />
        </div>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p2a2f1d00} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg6 />
        </div>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p2f69d400} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg7 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
      <ItemLink5 />
      <ItemLink6 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <List />
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.pcecda00} fill="var(--fill-0, #98A2B3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <Svg8 />
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p33517880} fill="var(--fill-0, #FF7043)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="bg-[#ecf3ff] relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg9 />
        </div>
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p37127470} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink8() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg10 />
        </div>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p12e5ee00} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink9() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg11 />
        </div>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <ItemLink7 />
      <ItemLink8 />
      <ItemLink9 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading2 />
      <List1 />
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.pcecda00} fill="var(--fill-0, #98A2B3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <Svg12 />
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3ae88b00} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink10() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg13 />
        </div>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3b7d4680} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink11() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg14 />
        </div>
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p33e075c0} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink12() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center px-[12px] py-[8px] relative w-full">
          <Svg15 />
        </div>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <ItemLink10 />
      <ItemLink11 />
      <ItemLink12 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <List2 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-start left-0 pb-[24px] pt-0 px-0 right-0 top-0" data-name="Nav">
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[808px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <Nav />
    </div>
  );
}

function Aside() {
  return (
    <div className="bg-white h-[900px] relative shrink-0 w-[90px]" data-name="Aside">
      <div className="box-border content-stretch flex flex-col h-[900px] items-start overflow-auto pl-[20px] pr-[21px] py-0 relative w-[90px]">
        <Container />
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Svg16() {
  return (
    <div className="h-[12px] relative shrink-0 w-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 12">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p80e2170} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="box-border content-stretch flex items-center justify-center p-px relative rounded-[8px] shrink-0 size-[44px] z-[2]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Svg16 />
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[14px] w-full">
        <p className="leading-[normal]">Search or type command...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[44px] relative rounded-[8px] shrink-0 w-[430px]" data-name="Input">
      <div className="box-border content-stretch flex h-[44px] items-start justify-center overflow-clip pl-[49px] pr-[57px] py-[13.25px] relative rounded-[inherit] w-[430px]">
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p12fac100} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bottom-[27.27%] content-stretch flex flex-col items-start left-[16px] top-[27.27%] w-[20px]" data-name="Container">
      <Svg17 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Form">
      <Input />
      <Container6 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <Form />
    </div>
  );
}

function Container8() {
  return (
    <div className="box-border content-stretch flex gap-[16px] isolate items-center px-0 py-[16px] relative shrink-0" data-name="Container">
      <Button />
      <Container7 />
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p29dbb400} fill="var(--fill-0, #667085)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-px relative rounded-[1.67772e+07px] shrink-0 size-[44px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Svg18 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p2735ed80} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#fd853a] right-px rounded-[1.67772e+07px] size-[8px] top-[3px]" data-name="Background">
      <div className="absolute bg-[#fd853a] left-0 opacity-75 rounded-[1.67772e+07px] size-[8px] top-0" data-name="Background" />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white box-border content-stretch flex items-center justify-center p-px relative rounded-[1.67772e+07px] shrink-0 size-[44px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Svg19 />
      <Background />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Button2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Button1 />
      <Container9 />
    </div>
  );
}

function User() {
  return (
    <div className="max-w-[44px] relative shrink-0 size-[44px]" data-name="User">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUser} />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[1.67772e+07px] shrink-0 size-[44px]" data-name="Container">
      <User />
    </div>
  );
}

function Margin() {
  return (
    <div className="box-border content-stretch flex flex-col h-[44px] items-start pl-0 pr-[12px] py-0 relative shrink-0 w-[56px]" data-name="Margin">
      <Container11 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[4px] py-0 relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Razesh Pudasaini</p>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[18px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
        <g id="SVG">
          <path d={svgPaths.p2ab5eb80} id="Vector" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link">
      <Margin />
      <Margin1 />
      <Svg20 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center justify-end px-0 py-[16px] relative shrink-0" data-name="Container">
      <Container10 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[24px] py-0 relative size-full">
          <Container8 />
          <Container13 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white box-border content-stretch flex items-start justify-center pb-px pt-0 px-0 shrink-0 sticky top-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container14 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 2">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[20px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">Chat</p>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="h-[16px] relative shrink-0 w-[17px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
        <g id="SVG">
          <path d={svgPaths.p2cc98700} id="Vector" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Home</p>
      </div>
      <Svg21 />
    </div>
  );
}

function Item() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-px pt-[2.75px] px-0 relative shrink-0" data-name="Item">
      <Link2 />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Chat</p>
      </div>
    </div>
  );
}

function OrderedList() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Ordered List">
      <Item />
      <Item1 />
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Nav">
      <OrderedList />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Nav1 />
    </div>
  );
}

function ButtonSvg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Button â SVG">
          <path clipRule="evenodd" d={svgPaths.p3316b480} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[6px] pt-0 px-0 relative shrink-0" data-name="Container">
      <ButtonSvg />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[24px] text-nowrap">
        <p className="leading-[32px] whitespace-pre">Chats</p>
      </div>
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[14px] w-full">
        <p className="leading-[normal]">Search...</p>
      </div>
    </div>
  );
}

function FormInput() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[44px] relative rounded-[8px] shrink-0 w-full" data-name="Form → Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[44px] items-start justify-center pl-[43px] pr-[15px] py-[13.25px] relative w-full">
          <Container18 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function ButtonSvg1() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[12px]" data-name="Button → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Button â SVG">
          <path clipRule="evenodd" d={svgPaths.p1d7c5600} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <FormInput />
      <ButtonSvg1 />
    </div>
  );
}

function Container20() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0 py-[8px] relative shrink-0 w-full" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="shrink-0 sticky top-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[20px] px-[20px] relative w-full">
          <Container17 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="basis-0 grow max-w-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile} />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[48px] relative rounded-[1.67772e+07px] shrink-0 size-[48px] z-[2]" data-name="Container">
      <Profile />
      <div className="absolute bg-[#12b76a] bottom-0 right-0 rounded-[1.67772e+07px] size-[12px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Kaiya George</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Project Manager</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading3 />
      <Container23 />
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between pl-0 pr-[0.01px] py-0 relative w-full">
          <Container24 />
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap">
            <p className="leading-[18px] whitespace-pre">15 mins</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[188.52px] z-[1]" data-name="Container">
      <Container25 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] isolate items-center justify-center left-0 p-[12px] right-[6px] rounded-[8px] top-0" data-name="Container">
      <Container22 />
      <Container26 />
    </div>
  );
}

function Profile1() {
  return (
    <div className="basis-0 grow max-w-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile1} />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[48px] relative rounded-[1.67772e+07px] shrink-0 size-[48px] z-[2]" data-name="Container">
      <Profile1 />
      <div className="absolute bg-[#12b76a] bottom-0 right-0 rounded-[1.67772e+07px] size-[12px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Lindsey Curtis</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Designer</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading5 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between relative w-full">
          <Container30 />
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap">
            <p className="leading-[18px] whitespace-pre">30 mins</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[188.52px] z-[1]" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] isolate items-center justify-center left-0 p-[12px] right-[6px] rounded-[8px] top-[76px]" data-name="Container">
      <Container28 />
      <Container32 />
    </div>
  );
}

function Profile2() {
  return (
    <div className="basis-0 grow max-w-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile2} />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[48px] relative rounded-[1.67772e+07px] shrink-0 size-[48px] z-[2]" data-name="Container">
      <Profile2 />
      <div className="absolute bg-[#12b76a] bottom-0 right-0 rounded-[1.67772e+07px] size-[12px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Zain Geidt</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Content Writer</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading6 />
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start justify-between relative w-full">
          <Container36 />
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap">
            <p className="leading-[18px] whitespace-pre">45 mins</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[188.52px] z-[1]" data-name="Container">
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] isolate items-center justify-center left-0 p-[12px] right-[6px] rounded-[8px] top-[152px]" data-name="Container">
      <Container34 />
      <Container38 />
    </div>
  );
}

function Profile3() {
  return (
    <div className="basis-0 grow max-w-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile3} />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[48px] relative rounded-[1.67772e+07px] shrink-0 size-[48px] z-[2]" data-name="Container">
      <Profile3 />
      <div className="absolute bg-[#f79009] bottom-0 right-0 rounded-[1.67772e+07px] size-[12px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Carla George</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Front-end Developer</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading7 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between pl-0 pr-[0.01px] py-0 relative w-full">
          <Container42 />
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap">
            <p className="leading-[18px] whitespace-pre">2 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[188.52px] z-[1]" data-name="Container">
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] isolate items-center justify-center left-0 p-[12px] right-[6px] rounded-[8px] top-[228px]" data-name="Container">
      <Container40 />
      <Container44 />
    </div>
  );
}

function Profile4() {
  return (
    <div className="basis-0 grow max-w-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile4} />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[48px] relative rounded-[1.67772e+07px] shrink-0 size-[48px] z-[2]" data-name="Container">
      <Profile4 />
      <div className="absolute bg-[#12b76a] bottom-0 right-0 rounded-[1.67772e+07px] size-[12px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Abram Schleifer</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Digital Marketer</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading8 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">1 hour</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[188.52px] z-[1]" data-name="Container">
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] isolate items-center justify-center left-0 p-[12px] right-[6px] rounded-[8px] top-[304px]" data-name="Container">
      <Container46 />
      <Container50 />
    </div>
  );
}

function Profile5() {
  return (
    <div className="basis-0 grow max-w-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile5} />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[48px] relative rounded-[1.67772e+07px] shrink-0 size-[48px] z-[2]" data-name="Container">
      <Profile5 />
      <div className="absolute bg-[#12b76a] bottom-0 right-0 rounded-[1.67772e+07px] size-[12px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Lincoln Donin</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[18px] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap whitespace-pre">
        <p className="mb-0">Project ManagerProduct</p>
        <p>Designer</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start min-w-[158.88px] relative shrink-0" data-name="Container">
      <Heading9 />
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[4.57px] py-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[18px] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap whitespace-pre">
        <p className="mb-0">3</p>
        <p>days</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between pl-0 pr-[0.01px] py-0 relative w-full">
          <Container54 />
          <Container55 />
        </div>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[188.52px] z-[1]" data-name="Container">
      <Container56 />
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] isolate items-center justify-center left-0 p-[12px] right-[6px] rounded-[8px] top-[380px]" data-name="Container">
      <Container52 />
      <Container57 />
    </div>
  );
}

function Profile6() {
  return (
    <div className="basis-0 grow max-w-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile6} />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[48px] relative rounded-[1.67772e+07px] shrink-0 size-[48px] z-[2]" data-name="Container">
      <Profile6 />
      <div className="absolute bg-[#12b76a] bottom-0 right-0 rounded-[1.67772e+07px] size-[12px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Erin Geidthem</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Copyrighter</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading10 />
      <Container60 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">5 days</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[188.52px] z-[1]" data-name="Container">
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] isolate items-center justify-center left-0 p-[12px] right-[6px] rounded-[8px] top-[466px]" data-name="Container">
      <Container59 />
      <Container63 />
    </div>
  );
}

function Profile7() {
  return (
    <div className="basis-0 grow max-w-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile7} />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[48px] relative rounded-[1.67772e+07px] shrink-0 size-[48px] z-[2]" data-name="Container">
      <Profile7 />
      <div className="absolute bg-[#f04438] bottom-0 right-0 rounded-[1.67772e+07px] size-[12px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Alena Baptista</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">SEO Expert</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading11 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between pl-0 pr-[0.01px] py-0 relative w-full">
          <Container67 />
          <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap">
            <p className="leading-[18px] whitespace-pre">2 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[188.52px] z-[1]" data-name="Container">
      <Container68 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] isolate items-center justify-center left-0 p-[12px] right-[6px] rounded-[8px] top-[542px]" data-name="Container">
      <Container65 />
      <Container69 />
    </div>
  );
}

function Profile8() {
  return (
    <div className="basis-0 grow max-w-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile8} />
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[48px] relative rounded-[1.67772e+07px] shrink-0 size-[48px] z-[2]" data-name="Container">
      <Profile8 />
      <div className="absolute bg-[#12b76a] bottom-0 right-0 rounded-[1.67772e+07px] size-[12px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Wilium vamos</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Content Writer</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0" data-name="Container">
      <Heading12 />
      <Container72 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container73 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">5 days</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[188.52px] z-[1]" data-name="Container">
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] isolate items-center justify-center left-0 p-[12px] right-[6px] rounded-[8px] top-[618px]" data-name="Container">
      <Container71 />
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="h-[596px] max-h-[596px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container33 />
      <Container39 />
      <Container45 />
      <Container51 />
      <Container58 />
      <Container64 />
      <Container70 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return (
    <div className="max-h-[596px] relative shrink-0 w-full" data-name="Container">
      <div className="max-h-inherit overflow-auto size-full">
        <div className="box-border content-stretch flex flex-col items-start max-h-inherit px-[20px] py-0 relative w-full">
          <Container77 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-full items-start p-px relative rounded-[16px] shrink-0 w-[320.52px]" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container21 />
      <Container78 />
    </div>
  );
}

function Profile9() {
  return (
    <div className="basis-0 grow max-w-[48px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-[48px]" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile1} />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-start justify-center max-w-[48px] relative rounded-[1.67772e+07px] shrink-0 z-[2]" data-name="Container">
      <Profile9 />
      <div className="absolute bg-[#12b76a] bottom-0 right-0 rounded-[1.67772e+07px] size-[12px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Lindsey Curtis</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="content-stretch flex gap-[12px] isolate items-center relative shrink-0" data-name="Container">
      <Container79 />
      <Heading13 />
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p2fc18100} id="Vector" stroke="var(--stroke-0, #344054)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
      <Svg22 />
    </div>
  );
}

function Svg23() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p35773900} fill="var(--fill-0, #344054)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
      <Svg23 />
    </div>
  );
}

function ButtonSvg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Button â SVG">
          <path clipRule="evenodd" d={svgPaths.p3316b480} fill="var(--fill-0, #344054)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Button3 />
      <Button4 />
      <ButtonSvg2 />
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="shrink-0 sticky top-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between pb-[17px] pt-[16px] px-[24px] relative w-full">
          <Container80 />
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Profile10() {
  return (
    <div className="basis-0 grow max-w-[40px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile1} />
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[40px] items-start justify-center max-w-[40px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0" data-name="Container">
      <Profile10 />
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#1d2939] text-[14px] w-full">
        <p className="mb-0">I want to make an appointment tomorrow</p>
        <p>from 2:00 to 5:00pm?</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f2f4f7] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px] shrink-0 w-full" data-name="Background">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
          <Container83 />
        </div>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Lindsey, 2 hours ago</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[294px] relative shrink-0" data-name="Container">
      <Background1 />
      <Container84 />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[24px] right-[585.48px] top-[24px]" data-name="Container">
      <Container82 />
      <Container85 />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white w-full">
        <p className="leading-[20px]">If don’t like something, I’ll stay away from it.</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#ff7043] box-border content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[8px] rounded-tr-[4px] shrink-0 w-[293.16px]" data-name="Background">
      <Container87 />
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-right w-full">
        <p className="leading-[18px]">2 hours ago</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-end left-[579.48px] max-w-[350px] right-[30px] top-[138px]" data-name="Container">
      <Background2 />
      <Container88 />
    </div>
  );
}

function Profile11() {
  return (
    <div className="basis-0 grow max-w-[40px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile1} />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[40px] relative rounded-[1.67772e+07px] shrink-0 size-[40px]" data-name="Container">
      <Profile11 />
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] w-full">
        <p className="leading-[20px]">I want more detailed information.</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f2f4f7] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px] shrink-0 w-full" data-name="Background">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start px-[12px] py-[8px] relative w-full">
          <Container91 />
        </div>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Lindsey, 2 hours ago</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start min-w-[231.11px] relative shrink-0" data-name="Container">
      <Background3 />
      <Container92 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[24px] right-[585.48px] top-[232px]" data-name="Container">
      <Container90 />
      <Container93 />
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white w-full">
        <p className="leading-[20px]">If don’t like something, I’ll stay away from it.</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#ff7043] box-border content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[8px] rounded-tr-[4px] shrink-0 w-[293.16px]" data-name="Background">
      <Container95 />
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-right text-white w-full">
        <p className="leading-[20px]">They got there early, and got really good seats.</p>
      </div>
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#ff7043] box-border content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[8px] rounded-tr-[4px] shrink-0 w-[314.98px]" data-name="Background">
      <Container96 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-right w-full">
        <p className="leading-[18px]">2 hours ago</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-end left-[579.48px] max-w-[350px] right-[30px] top-[326px]" data-name="Container">
      <Background4 />
      <Background5 />
      <Container97 />
    </div>
  );
}

function Profile12() {
  return (
    <div className="basis-0 grow max-w-[40px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="profile">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[1.67772e+07px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgProfile1} />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center max-w-[40px] relative rounded-[1.67772e+07px] shrink-0 size-[40px]" data-name="Container">
      <Profile12 />
    </div>
  );
}

function Chat() {
  return (
    <div className="h-[150px] max-w-[270px] relative shrink-0 w-[270px]" data-name="chat">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgChat} />
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[270px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <Chat />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] w-full">
        <p className="leading-[20px]">Please preview the image</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-bl-[8px] rounded-br-[8px] rounded-tl-[4px] rounded-tr-[8px] shrink-0 w-[181.76px]" data-name="Background">
      <Container101 />
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Lindsey, 2 hours ago</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Container">
      <Container100 />
      <Background6 />
      <Container102 />
    </div>
  );
}

function Container104() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start left-[24px] right-[585.48px] top-[464px]" data-name="Container">
      <Container99 />
      <Container103 />
    </div>
  );
}

function Container105() {
  return (
    <div className="basis-0 grow max-h-[726px] min-h-px min-w-px overflow-auto relative shrink-0 w-full" data-name="Container">
      <Container86 />
      <Container89 />
      <Container94 />
      <Container98 />
      <Container104 />
    </div>
  );
}

function Container106() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[14px] w-full">
        <p className="leading-[normal]">Type a message</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Input">
      <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[36px] items-start justify-center pl-[48px] pr-[20px] py-[9.25px] relative w-full">
          <Container106 />
        </div>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p28072c80} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bottom-[16.67%] content-stretch flex flex-col items-start left-[12px] top-[16.67%]" data-name="Button">
      <Svg24 />
    </div>
  );
}

function Container107() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0 z-[2]" data-name="Container">
      <Input1 />
      <Button5 />
    </div>
  );
}

function ButtonSvg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Button â SVG">
          <path clipRule="evenodd" d={svgPaths.pfffe810} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonMargin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="Button:margin">
      <ButtonSvg3 />
    </div>
  );
}

function Svg25() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p29deda00} id="Vector" stroke="var(--stroke-0, #667085)" strokeWidth="1.5" />
          <path d={svgPaths.p15de3680} id="Vector_2" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M10 21.25H14" id="Vector_3" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 18.25V21.25" id="Vector_4" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 7.5V10.5" id="Vector_5" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M14.5 8.25V9.75" id="Vector_6" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M9.5 8.25V9.75" id="Vector_7" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Button">
      <Svg25 />
    </div>
  );
}

function Svg26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p22bf1580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#ff7043] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[36px]" data-name="Button">
      <Svg26 />
    </div>
  );
}

function ButtonMargin1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[36px] items-start pl-[20px] pr-0 py-0 relative shrink-0 w-[56px]" data-name="Button:margin">
      <Button7 />
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 z-[1]" data-name="Container">
      <ButtonMargin />
      <Button6 />
      <ButtonMargin1 />
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex isolate items-center justify-between relative shrink-0 w-full" data-name="Form">
      <Container107 />
      <Container108 />
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="shrink-0 sticky top-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[12px] pt-[13px] px-[12px] relative w-full">
          <Form1 />
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white h-full relative rounded-[16px] shrink-0 w-[961.48px]" data-name="Background+Border">
      <div className="box-border content-stretch flex flex-col h-full items-start overflow-clip p-px relative rounded-[inherit] w-[961.48px]">
        <HorizontalBorder />
        <Container105 />
        <HorizontalBorder1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container109() {
  return (
    <div className="basis-0 content-stretch flex gap-[20px] grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col h-[726px] items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container109 />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[1536px] relative shrink-0 w-full z-[1]" data-name="Main">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start max-w-inherit p-[24px] relative w-full">
          <Container15 />
          <Container110 />
        </div>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[903px] isolate items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Header />
      <Main />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex h-[900px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Aside />
      <Container111 />
    </div>
  );
}

export default function Chat1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Chat" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container112 />
    </div>
  );
}