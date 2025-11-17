import svgPaths from "./svg-5556gia5u5";
import imgLogoFf2 from "figma:asset/75ec65f5c1dd74d67e5d02e6f8ce770c6179b369.png";
import imgUser from "figma:asset/32ce3aa341ad8fd346cddf888fc952bab1c52c6e.png";
import imgIcon from "figma:asset/57f724068347824c7ac677c9866e73a25211b2e3.png";
import imgIcon1 from "figma:asset/b51297394813eae7379272dc1d65fb4b1e89b340.png";
import imgIcon2 from "figma:asset/05fafaf0620377cea148f019d50fea56437ea8b9.png";
import imgIcon3 from "figma:asset/7073f8ce8b212076f6cc39866195f3255965fc81.png";
import imgFlag1Png from "figma:asset/2503be4de2ad783684e15fcb580be2ce151532d1.png";
import imgFlag2Png from "figma:asset/3fa9f40ab704e3271224c93f892af3c6e0765cd1.png";
import imgFlag3Png from "figma:asset/c7661fee6e63f7d1a5441a360ea128fdb56653cd.png";
import imgFlag4Png from "figma:asset/fb67e11ef2f20016f370b48ea973009044070e07.png";
import imgFlag5Png from "figma:asset/39dfa6b2636a741d23d32f8ad46c4795a2bd8d9f.png";

function LogoSvg() {
  return (
    <div className="h-[32px] relative shrink-0 w-[154px]" data-name="logo.svg">
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] inset-[19.1%_9.99%_18.4%_22.48%] justify-center leading-[0] not-italic text-[16px] text-black text-nowrap">
        <p className="leading-[20px] whitespace-pre">Mero Jyotish</p>
      </div>
      <div className="absolute aspect-[264/264] left-[-2.2%] right-[80.12%] top-[calc(50%+0.11px)] translate-y-[-50%]" data-name="logo ff 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoFf2} />
      </div>
    </div>
  );
}

function LogoSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0" data-name="logo.svg fill">
      <LogoSvg />
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[154px] relative shrink-0" data-name="Logo">
      <LogoSvgFill />
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
    <div className="box-border content-stretch flex items-center pb-[28px] pt-[32px] px-0 relative shrink-0 w-full" data-name="Container">
      <Link />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] uppercase w-full">
        <p className="leading-[20px]">MENU</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.pd8f7900} fill="var(--fill-0, #FF7043)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff7043] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Dashboard</p>
      </div>
    </div>
  );
}

function Svg1() {
  return <div className="size-[20px]" data-name="SVG" />;
}

function Link1() {
  return (
    <div className="bg-[rgba(255,112,67,0.15)] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Svg />
          <Container1 />
          <div className="absolute flex items-center justify-center right-[10px] size-[20px] top-1/2 translate-y-[-50%]">
            <div className="flex-none rotate-[180deg]">
              <Svg1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Item">
      <Link1 />
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

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Calendar</p>
      </div>
    </div>
  );
}

function ItemLink() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Svg2 />
          <Container2 />
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

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">User Profile</p>
      </div>
    </div>
  );
}

function ItemLink1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Svg3 />
          <Container3 />
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

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Report</p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="absolute right-[10px] size-[20px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pefcb500} id="Vector" stroke="var(--stroke-0, #667085)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Svg4 />
          <Container4 />
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
          <path clipRule="evenodd" d={svgPaths.p3bb18b80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Analytics</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="absolute right-[10px] size-[20px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1c77c7d6} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Svg6 />
          <Container5 />
          <Svg7 />
        </div>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3bb18b80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Revenue</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="absolute right-[10px] size-[20px] top-1/2 translate-y-[-50%]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p1c77c7d6} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ItemLink4() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Svg8 />
          <Container6 />
          <Svg9 />
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsLightCallOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="material-symbols-light:call-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:call-outline">
          <path d={svgPaths.p348d5600} fill="var(--fill-0, #667085)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Call</p>
      </div>
    </div>
  );
}

function ItemLink5() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <MaterialSymbolsLightCallOutline />
          <Container7 />
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
          <path clipRule="evenodd" d={svgPaths.p33517880} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Chat</p>
      </div>
    </div>
  );
}

function ItemLink6() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Svg10 />
          <Container8 />
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

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Text</p>
      </div>
    </div>
  );
}

function ItemLink7() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Item → Link">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-[8px] relative w-full">
          <Svg11 />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <ItemLink />
      <ItemLink1 />
      <ItemLink2 />
      <ItemLink3 />
      <ItemLink4 />
      <ItemLink5 />
      <ItemLink6 />
      <ItemLink7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <List />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] items-start left-0 pb-[24px] pt-0 px-0 right-0 top-0" data-name="Nav">
      <Container10 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#101828] text-[16px] text-center w-full">
        <p className="leading-[24px]">#1 Tailwind CSS Dashboard</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[8px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[20px] not-italic relative shrink-0 text-[#667085] text-[14px] text-center w-full">
        <p className="mb-0">Leading Tailwind CSS Admin</p>
        <p className="mb-0">Template with 400+ UI</p>
        <p>Component and Pages.</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#ff7043] relative rounded-[8px] shrink-0 w-full" data-name="Link">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center p-[12px] relative w-full">
          <div className="basis-0 flex flex-col font-['Poppins:Medium',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[14px] text-center text-white">
            <p className="leading-[20px]">Purchase Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-gray-50 max-w-[240px] relative rounded-[16px] shrink-0 w-full" data-name="Background">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start max-w-inherit px-[16px] py-[20px] relative w-full">
          <Heading4 />
          <Container11 />
          <Link2 />
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute box-border content-stretch flex flex-col items-start left-0 pb-[40px] pt-0 px-[4.5px] right-0 top-[1128px]" data-name="Margin">
      <Background />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[808px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <Nav />
      <Margin />
    </div>
  );
}

function Aside() {
  return (
    <div className="bg-white h-[900px] relative shrink-0 w-[290px]" data-name="Aside">
      <div className="box-border content-stretch flex flex-col h-[900px] items-start overflow-auto pl-[20px] pr-[21px] py-0 relative w-[290px]">
        <Container />
        <Container12 />
      </div>
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-[0px_1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Svg12() {
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
      <Svg12 />
    </div>
  );
}

function Container13() {
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
        <Container13 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)]" />
    </div>
  );
}

function Svg13() {
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

function Container14() {
  return (
    <div className="absolute bottom-[27.27%] content-stretch flex flex-col items-start left-[16px] top-[27.27%] w-[20px]" data-name="Container">
      <Svg13 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Form">
      <Input />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 z-[1]" data-name="Container">
      <Form />
    </div>
  );
}

function Container16() {
  return (
    <div className="box-border content-stretch flex gap-[16px] isolate items-center px-0 py-[16px] relative shrink-0" data-name="Container">
      <Button />
      <Container15 />
    </div>
  );
}

function Svg14() {
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
      <Svg14 />
    </div>
  );
}

function Svg15() {
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

function Background1() {
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
      <Svg15 />
      <Background1 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Button2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Button1 />
      <Container17 />
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

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[1.67772e+07px] shrink-0 size-[44px]" data-name="Container">
      <User />
    </div>
  );
}

function Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[44px] items-start pl-0 pr-[12px] py-0 relative shrink-0 w-[56px]" data-name="Margin">
      <Container19 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[4px] py-0 relative shrink-0" data-name="Margin">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Razesh Pudasaini</p>
      </div>
    </div>
  );
}

function Svg16() {
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

function Link3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Link">
      <Margin1 />
      <Margin2 />
      <Svg16 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Link3 />
    </div>
  );
}

function Container21() {
  return (
    <div className="box-border content-stretch flex gap-[16px] items-center justify-end px-0 py-[16px] relative shrink-0" data-name="Container">
      <Container18 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[24px] py-0 relative size-full">
          <Container16 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white box-border content-stretch flex items-start justify-center pb-px pt-0 px-0 shrink-0 sticky top-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e4e7ec] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Active Sessions</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[76.63px] items-center pl-0 pr-[0.01px] py-0 relative w-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[30px] w-full">
        <p className="leading-[38px]">8</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">3 calls, 5 chats</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container25 />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[25px] relative size-full">
          <Container24 />
          <Heading1 />
          <Container26 />
        </div>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Reports Generated</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[30px] w-full">
        <p className="leading-[38px]">12</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">6 Kundali, 6 Others</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container28 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container29 />
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="basis-0 bg-white grow h-[130px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] h-[130px] items-start p-[25px] relative w-full">
          <Container27 />
          <Heading5 />
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Consultations</p>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[30px] w-full">
        <p className="leading-[38px]">24</p>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#fef3f2] box-border content-stretch flex items-center px-[8px] py-[2px] relative rounded-[1.67772e+07px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#d92d20] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">-4.5%</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">From last month</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Background2 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[25px] relative size-full">
          <Container31 />
          <Heading6 />
          <Container34 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="basis-0 content-stretch flex gap-[18px] grow h-[130px] items-center min-h-px min-w-px relative shrink-0">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[18px] items-start justify-center relative shrink-0 w-[734px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">{`Call  Revenue`}</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container36 />
    </div>
  );
}

function MaterialSymbolsLightCallOutline1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="material-symbols-light:call-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols-light:call-outline">
          <path d={svgPaths.p348d5600} fill="var(--fill-0, #667085)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Container37 />
      <MaterialSymbolsLightCallOutline1 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[30px] w-full">
        <p className="leading-[38px]">Rs.50,000</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">16 calls completed</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container38 />
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[25px] relative size-full">
          <Frame2 />
          <Heading7 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Chat Revenue</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[76.63px] items-center pl-0 pr-[0.01px] py-0 relative w-full">
          <Container40 />
        </div>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p33517880} fill="var(--fill-0, #667085)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full">
      <Container41 />
      <Svg17 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[30px] w-full">
        <p className="leading-[38px]">8</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">18 chat sessions</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container42 />
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[25px] relative size-full">
          <Frame3 />
          <Heading8 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Report Revenue</p>
      </div>
    </div>
  );
}

function Svg18() {
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

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <Container44 />
      <Svg18 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[30px] w-full">
        <p className="leading-[38px]">12</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">2 reports delivered</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[4px] items-start p-[25px] relative size-full">
          <Frame4 />
          <Heading9 />
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="basis-0 content-stretch flex gap-[18px] grow h-[130px] items-center min-h-px min-w-px relative shrink-0">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[18px] items-start justify-center relative shrink-0 w-[735px]" data-name="Container">
      <Frame9 />
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #0F111A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #0F111A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">New Session</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">Start a new consultation</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container49 />
      <Container50 />
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-white grow h-[90px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[90px] items-start p-[8px] relative w-full">
          <Svg19 />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Generate Report</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">Create Kundali report</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Button4() {
  return (
    <div className="basis-0 bg-white grow h-[90px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[90px] items-start p-[8px] relative w-full">
          <Svg20 />
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2949e900} id="Vector" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p22e64900} id="Vector_2" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Add Balance</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">Renew account balance</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function Button5() {
  return (
    <div className="basis-0 bg-white grow h-[92px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[92px] items-start p-[8px] relative w-full">
          <Svg21 />
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p962cac0} id="Vector" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p12a46e00} id="Vector_2" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Notifications</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#98a2b3] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">View pending alerts</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Button6() {
  return (
    <div className="basis-0 bg-white grow h-[92px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[92px] items-start p-[8px] relative w-full">
          <Svg22 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="basis-0 bg-white grow h-[130px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] h-[130px] items-start px-[18px] py-[25px] relative w-full">
          <Frame8 />
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[18px] items-start relative shrink-0 w-full">
      <BackgroundBorderShadow />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0">
      <Container35 />
      <Container48 />
      <Frame16 />
    </div>
  );
}

function Heading6Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0" data-name="Heading 6:margin">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap">
        <p className="leading-[21.6px] whitespace-pre">Agent Avg. Earnings</p>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="image">
          <path d="M1.5 3.75L6 8.25L10.5 3.75" id="Vector" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[40px] items-end justify-center left-0 overflow-clip pl-[87.5px] pr-px py-[14px] top-0 w-[100.5px]" data-name="image fill">
      <Image />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[10px] w-[53.5px]" data-name="Container">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-[10.5px] translate-y-[-50%]">
        <p className="leading-[21px] whitespace-pre">Yearly</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[100.5px]" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[rgba(209,213,219,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ImageFill />
      <Container61 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6Margin />
      <Options />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="bg-white relative rounded-tl-[5px] rounded-tr-[5px] shrink-0 w-full" data-name="Background+HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(209,213,219,0.5)] border-solid inset-0 pointer-events-none rounded-tl-[5px] rounded-tr-[5px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pb-[15px] pt-[14px] px-[24px] relative w-full">
          <Container62 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="max-w-[48px] relative shrink-0 size-[26px]" data-name="Icon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIcon} />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-green-100 content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]" data-name="Background">
      <Icon />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex flex-col gap-[3.49px] items-start leading-[0] not-italic relative shrink-0 text-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[24px] text-gray-900">
        <p className="leading-[28.8px] text-nowrap whitespace-pre">Rs.50,000</p>
      </div>
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[16px] text-gray-600">
        <p className="leading-[27.2px] text-nowrap whitespace-pre">Total Earning</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Container">
      <Background3 />
      <Paragraph />
    </div>
  );
}

function SvgjsG8() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] inset-[6.61%_90.26%_9.73%_2.27%] leading-[normal] not-italic text-[#8a929f] text-[11px] text-right" data-name="SvgjsG1800">
      <p className="absolute inset-[6.61%_90.26%_87.9%_2.27%]">100k</p>
      <p className="absolute inset-[22.25%_90.26%_72.27%_3.25%]">80k</p>
      <p className="absolute inset-[37.88%_90.26%_56.63%_3.25%]">60k</p>
      <p className="absolute inset-[53.52%_90.26%_41%_3.25%]">40k</p>
      <p className="absolute inset-[69.15%_90.26%_25.36%_3.57%]">20k</p>
      <p className="absolute inset-[84.79%_90.26%_9.73%_5.52%]">0k</p>
    </div>
  );
}

function SvgjsG7() {
  return (
    <div className="absolute contents inset-[6.61%_90.26%_9.73%_2.27%]" data-name="SvgjsG1799">
      <SvgjsG8 />
    </div>
  );
}

function SvgjsG3() {
  return (
    <div className="absolute inset-[10%_3.25%_12.15%_16.51%]" data-name="SvgjsG1753">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 204">
        <g id="SvgjsG1753">
          <g id="SvgjsG1754">
            <path d="M0 40.1195H247.141" id="SvgjsLine1766" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="4 4" />
            <path d="M0 81.0841H247.141" id="SvgjsLine1767" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="4 4" />
            <path d="M0 122.049H247.141" id="SvgjsLine1768" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="4 4" />
            <path d="M0 163.013H247.141" id="SvgjsLine1769" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="4 4" />
          </g>
          <g id="SvgjsLine1772"></g>
          <g id="SvgjsLine1771"></g>
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute inset-[9.68%_2.6%_12.15%_15.86%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 205">
        <g id="Clip path group">
          <mask height="205" id="mask0_1_1782" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="252" x="0" y="0">
            <g id="gridRectMask0rgblbae">
              <path d={svgPaths.p1ff51700} fill="var(--fill-0, white)" id="SvgjsRect1704" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1782)">
            <path d={svgPaths.p3fe5200} fill="url(#paint0_linear_1_1782)" id="SvgjsPath1716" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1782" x1="14.357" x2="14.357" y1="30.7243" y2="204.824">
            <stop stopColor="#487FFF" />
            <stop offset="1" stopColor="#487FFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute inset-[9.68%_2.6%_12.15%_15.86%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 205">
        <g id="Clip path group">
          <mask height="205" id="mask0_1_1715" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="252" x="0" y="0">
            <g id="gridRectMask0rgblbae">
              <path d={svgPaths.p1ff51700} fill="var(--fill-0, white)" id="SvgjsRect1704" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1715)">
            <path d={svgPaths.p2abda480} fill="url(#paint0_linear_1_1715)" id="SvgjsPath1722" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1715" x1="49.6628" x2="49.6628" y1="61.4478" y2="204.824">
            <stop stopColor="#487FFF" />
            <stop offset="1" stopColor="#487FFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div className="absolute inset-[9.68%_2.6%_12.15%_15.86%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 205">
        <g id="Clip path group">
          <mask height="205" id="mask0_1_1732" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="252" x="0" y="0">
            <g id="gridRectMask0rgblbae">
              <path d={svgPaths.p1ff51700} fill="var(--fill-0, white)" id="SvgjsRect1704" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1732)">
            <path d={svgPaths.pf6dc900} fill="url(#paint0_linear_1_1732)" id="SvgjsPath1728" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1732" x1="84.9686" x2="84.9686" y1="122.895" y2="204.824">
            <stop stopColor="#487FFF" />
            <stop offset="1" stopColor="#487FFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute inset-[9.68%_2.6%_12.15%_15.86%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 205">
        <g id="Clip path group">
          <mask height="205" id="mask0_1_1461" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="252" x="0" y="0">
            <g id="gridRectMask0rgblbae">
              <path d={svgPaths.p1ff51700} fill="var(--fill-0, white)" id="SvgjsRect1704" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1461)">
            <path d={svgPaths.p1a45d500} fill="url(#paint0_linear_1_1461)" id="SvgjsPath1734" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1461" x1="120.274" x2="120.274" y1="102.412" y2="204.824">
            <stop stopColor="#487FFF" />
            <stop offset="1" stopColor="#487FFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div className="absolute inset-[9.68%_2.6%_12.15%_15.86%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 205">
        <g id="Clip path group">
          <mask height="205" id="mask0_1_1563" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="252" x="0" y="0">
            <g id="gridRectMask0rgblbae">
              <path d={svgPaths.p1ff51700} fill="var(--fill-0, white)" id="SvgjsRect1704" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1563)">
            <path d={svgPaths.p229b6020} fill="url(#paint0_linear_1_1563)" id="SvgjsPath1740" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1563" x1="155.58" x2="155.58" y1="81.9301" y2="204.824">
            <stop stopColor="#487FFF" />
            <stop offset="1" stopColor="#487FFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div className="absolute inset-[9.68%_2.6%_12.15%_15.86%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 205">
        <g id="Clip path group">
          <mask height="205" id="mask0_1_1601" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="252" x="0" y="0">
            <g id="gridRectMask0rgblbae">
              <path d={svgPaths.p1ff51700} fill="var(--fill-0, white)" id="SvgjsRect1704" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1601)">
            <path d={svgPaths.p1a44ce00} fill="url(#paint0_linear_1_1601)" id="SvgjsPath1746" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1601" x1="190.886" x2="190.886" y1="102.412" y2="204.824">
            <stop stopColor="#487FFF" />
            <stop offset="1" stopColor="#487FFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute inset-[9.68%_2.6%_12.15%_15.86%]" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 205">
        <g id="Clip path group">
          <mask height="205" id="mask0_1_1754" maskUnits="userSpaceOnUse" style={{ maskType: "luminance" }} width="252" x="0" y="0">
            <g id="gridRectMask0rgblbae">
              <path d={svgPaths.p1ff51700} fill="var(--fill-0, white)" id="SvgjsRect1704" />
            </g>
          </mask>
          <g mask="url(#mask0_1_1754)">
            <path d={svgPaths.p1444f280} fill="url(#paint0_linear_1_1754)" id="SvgjsPath1752" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1754" x1="226.192" x2="226.192" y1="122.895" y2="204.824">
            <stop stopColor="#487FFF" />
            <stop offset="1" stopColor="#487FFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SvgjsG2() {
  return (
    <div className="absolute contents inset-[9.68%_2.6%_12.15%_15.86%]" data-name="SvgjsG1707">
      <ClipPathGroup />
      <ClipPathGroup1 />
      <ClipPathGroup2 />
      <ClipPathGroup3 />
      <ClipPathGroup4 />
      <ClipPathGroup5 />
      <ClipPathGroup6 />
    </div>
  );
}

function SvgjsG1() {
  return (
    <div className="absolute contents inset-[9.68%_2.6%_12.15%_15.86%]" data-name="SvgjsG1706">
      <SvgjsG2 />
    </div>
  );
}

function SvgjsG4() {
  return (
    <div className="absolute inset-[9.68%_3.25%_11.82%_16.51%]" data-name="SvgjsG1756">
      <div className="absolute bottom-[-0.24%] left-0 right-0 top-[-0.24%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 248 207">
          <g id="SvgjsG1756">
            <path d="M0 0.5H247.141" id="SvgjsLine1765" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="4 4" />
            <path d="M0 205.323H247.141" id="SvgjsLine1770" stroke="var(--stroke-0, #D1D5DB)" strokeDasharray="4 4" />
            <path d="M0 206.168H247.141" id="SvgjsLine1798" stroke="var(--stroke-0, #E0E0E0)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SvgjsG6() {
  return (
    <div className="absolute contents font-['Poppins:Regular',sans-serif] inset-[92.05%_5.73%_2.15%_18.67%] leading-[normal] not-italic text-[#8a929f] text-[12px] text-center" data-name="SvgjsG1776">
      <p className="absolute inset-[92.05%_73.86%_2.15%_18.67%]">Sun</p>
      <p className="absolute inset-[92.05%_62.07%_2.15%_29.49%]">Mon</p>
      <p className="absolute inset-[92.05%_51.26%_2.15%_41.6%]">Tue</p>
      <p className="absolute inset-[92.05%_38.82%_2.15%_52.09%]">Wed</p>
      <p className="absolute inset-[92.05%_28.33%_2.15%_64.52%]">Thu</p>
      <p className="absolute inset-[92.05%_18.17%_2.15%_77.29%]">Fri</p>
      <p className="absolute inset-[92.05%_5.73%_2.15%_87.78%]">Sat</p>
    </div>
  );
}

function SvgjsG5() {
  return (
    <div className="absolute contents inset-[92.05%_5.73%_2.15%_18.67%]" data-name="SvgjsG1775">
      <SvgjsG6 />
    </div>
  );
}

function SvgjsG() {
  return (
    <div className="absolute contents inset-[9.68%_2.6%_2.15%_15.86%]" data-name="SvgjsG1696">
      <div className="absolute inset-[9.68%_80.05%_12.15%_16.51%]" data-name="SvgjsRect1703">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p2771bb80} fill="url(#paint0_linear_1_1424)" fillOpacity="0.9" id="SvgjsRect1703" opacity="0" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1424" x1="0" x2="0" y1="0" y2="204.823">
              <stop stopColor="#D8E3F0" stopOpacity="0.16" />
              <stop offset="1" stopColor="#BED1E6" stopOpacity="0.25" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[88.18%_83.49%_9.89%_16.51%]" data-name="SvgjsLine1757">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 0V5.07097" id="SvgjsLine1757" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[88.18%_72.02%_9.89%_27.98%]" data-name="SvgjsLine1758">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 0V5.07097" id="SvgjsLine1757" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[88.18%_60.56%_9.89%_39.44%]" data-name="SvgjsLine1759">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 0V5.07097" id="SvgjsLine1757" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[88.18%_49.1%_9.89%_50.9%]" data-name="SvgjsLine1760">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 0V5.07097" id="SvgjsLine1757" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[88.18%_37.64%_9.89%_62.36%]" data-name="SvgjsLine1761">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 0V5.07097" id="SvgjsLine1757" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[88.18%_26.17%_9.89%_73.83%]" data-name="SvgjsLine1762">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 0V5.07097" id="SvgjsLine1757" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[88.18%_14.71%_9.89%_85.29%]" data-name="SvgjsLine1763">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 0V5.07097" id="SvgjsLine1757" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[88.18%_3.25%_9.89%_96.75%]" data-name="SvgjsLine1764">
        <div className="absolute bottom-0 left-[-0.5px] right-[-0.5px] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 6">
            <path d="M0.5 0V5.07097" id="SvgjsLine1757" stroke="var(--stroke-0, #E0E0E0)" />
          </svg>
        </div>
      </div>
      <SvgjsG3 />
      <SvgjsG1 />
      <SvgjsG4 />
      <div className="absolute inset-[9.68%_3.25%_90.32%_16.51%]" data-name="SvgjsLine1773">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d="M0 0H247.141" id="SvgjsLine1773" opacity="0" stroke="var(--stroke-0, #B6B6B6)" />
        </svg>
      </div>
      <div className="absolute inset-[9.68%_3.25%_90.32%_16.51%]" data-name="SvgjsLine1774">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="SvgjsLine1774" opacity="0"></g>
        </svg>
      </div>
      <SvgjsG5 />
    </div>
  );
}

function Svg23() {
  return (
    <div className="h-[262px] relative shrink-0 w-[308px]" data-name="SVG">
      <SvgjsG7 />
      <SvgjsG />
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col h-[262px] items-start relative shrink-0 w-[308px]" data-name="Container">
      <Svg23 />
    </div>
  );
}

function Container65() {
  return (
    <div className="box-border content-stretch flex flex-col h-[280px] items-start pb-[15px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container64 />
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[364px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[364px] items-start p-[24px] relative w-full">
          <Container63 />
          <Container65 />
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[426px] items-start relative rounded-[8px] shadow-[0px_4px_30px_0px_rgba(46,45,116,0.05)] shrink-0 w-[356px]" data-name="Background+Shadow">
      <BackgroundHorizontalBorder />
      <Container66 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[18px] items-start relative shrink-0">
      <Frame14 />
      <BackgroundShadow />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute h-[56px] left-1/2 top-[24px] translate-x-[-50%] w-[57px]" data-name="Icon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIcon1} />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[92px]" data-name="Heading 6">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-gray-900 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Incoming Calls</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[123.25px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">Last 7 days</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[167.19px]" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-gray-900 text-nowrap">
        <p className="leading-[36px] whitespace-pre">45</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[218.44px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">Vs 497 prev. 7 days</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute inset-[-6.2px_399.12px_55.81px_25px]" data-name="Container">
      <Icon1 />
      <Heading3 />
      <Container67 />
      <Heading2 />
      <Container68 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute h-[56px] left-[calc(50%-0.01px)] top-[24px] translate-x-[-50%] w-[57px]" data-name="Icon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIcon2} />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[92px]" data-name="Heading 6">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-gray-900 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Answered Calls</p>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[123.25px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">Last 7 days</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[167.19px]" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-gray-900 text-nowrap">
        <p className="leading-[36px] whitespace-pre">100</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[218.44px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">Vs 497 prev. 7 days</p>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="absolute inset-[-6px_212.25px_55.61px_211.88px]" data-name="Container">
      <Icon2 />
      <Heading10 />
      <Container70 />
      <Heading11 />
      <Container71 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-1/2 size-[56px] top-[24px] translate-x-[-50%]" data-name="Icon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgIcon3} />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[92px]" data-name="Heading 6">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-center text-gray-900 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Abandoned Calls</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[123.25px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">Last 7 days</p>
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[167.19px]" data-name="Heading 5">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-center text-gray-900 text-nowrap">
        <p className="leading-[36px] whitespace-pre">12</p>
      </div>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] right-[16px] top-[218.44px]" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">Vs 497 prev. 7 days</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute inset-[-6px_25.37px_55.61px_398.75px]" data-name="Container">
      <Icon3 />
      <Heading12 />
      <Container73 />
      <Heading13 />
      <Container74 />
    </div>
  );
}

function Container76() {
  return (
    <div className="bg-white h-[256px] relative rounded-[16px] shrink-0 w-[591px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container69 />
      <Container72 />
      <Container75 />
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[212px]" data-name="SVG">
      <div className="absolute inset-[6.25%]" data-name="Vector">
        <div className="absolute inset-[-2.86%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197 197">
            <path d={svgPaths.p14a6d080} id="Vector" stroke="var(--stroke-0, #F5F6FA)" strokeLinecap="round" strokeWidth="10.6" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[6.25%]" data-name="Vector">
        <div className="absolute inset-[-2.86%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197 197">
            <path d={svgPaths.p14a6d080} id="Vector" stroke="var(--stroke-0, #487FFF)" strokeLinecap="round" strokeWidth="10.6" />
          </svg>
        </div>
      </div>
      <p className="absolute font-['Poppins:Regular',sans-serif] inset-[27%_50.24%_28.19%_49.76%] leading-[normal] not-italic text-[63.6px] text-center text-nowrap text-white whitespace-pre">&nbsp;</p>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-center text-gray-900 w-full">
        <p className="leading-[57.6px]">85.7</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="box-border content-stretch flex items-start justify-center pb-0 pt-[9.55px] px-0 relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">Target: 90%</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.7px] inset-[19.58%_25.51%_20.54%_25.51%] items-center" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-900 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">Service Level</p>
      </div>
      <Heading14 />
      <Container77 />
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg24 />
      <Container78 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-gray-900 text-nowrap">
        <p className="leading-[24px] whitespace-pre">Average CSAT</p>
      </div>
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-green-600 box-border content-stretch flex flex-col items-start px-[10px] py-0 relative rounded-[800px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[23.8px] whitespace-pre">of 5</p>
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-start pb-0 pt-[3.59px] px-0 relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-gray-900 text-nowrap">
        <p className="leading-[43.2px] whitespace-pre">4.7</p>
      </div>
      <Background4 />
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex flex-col gap-[7.6px] items-start relative shrink-0" data-name="Container">
      <Heading15 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">All time</p>
      </div>
      <Container80 />
    </div>
  );
}

function Container82() {
  return (
    <div className="basis-0 bg-white grow h-[256px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[20px] h-[256px] items-center p-[25px] relative w-full">
          <Container79 />
          <Container81 />
        </div>
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-[1113px]" data-name="Container">
      <Container76 />
      <Container82 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">Recent Activity</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="basis-0 bg-[rgba(255,112,67,0.12)] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="basis-0 flex flex-col font-['Poppins:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ff7043] text-[14px] text-center">
        <p className="leading-[20px]">RK</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <Overlay />
    </div>
  );
}

function Svg25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[13.891px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Rajesh Kumar</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Svg25 />
      <Container85 />
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(252,215,105,0.2)] box-border content-stretch flex items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(252,215,105,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fcd769] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">completed</p>
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame10 />
      <OverlayBorder />
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[13.672px] w-full">
        <p className="leading-[20px]">completed a call session</p>
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">45 min</p>
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9da4af] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">•</p>
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff7043] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">₹500</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[11.813px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">2 hours ago</p>
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container88 />
      <Container89 />
      <Container90 />
      <Container89 />
      <Container91 />
    </div>
  );
}

function Container93() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container86 />
      <Container87 />
      <Container92 />
    </div>
  );
}

function OverlayBorder1() {
  return (
    <div className="basis-0 bg-white grow h-[92px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[92px] items-center p-[8px] relative w-full">
          <Container84 />
          <Container93 />
        </div>
      </div>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="basis-0 bg-[rgba(255,112,67,0.12)] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="basis-0 flex flex-col font-['Poppins:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ff7043] text-[14px] text-center">
        <p className="leading-[20px]">PS</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <Overlay1 />
    </div>
  );
}

function Svg26() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1db90b80} id="Vector" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[13.781px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Priya Sharma</p>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Svg26 />
      <Container95 />
    </div>
  );
}

function OverlayBorder2() {
  return (
    <div className="bg-[rgba(145,103,228,0.2)] box-border content-stretch flex items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(145,103,228,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff7043] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">active</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame13 />
      <OverlayBorder2 />
    </div>
  );
}

function Container97() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[13.563px] w-full">
        <p className="leading-[20px]">started a chat session</p>
      </div>
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">ongoing</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9da4af] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">•</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff7043] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">₹200</p>
      </div>
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">30 min ago</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container98 />
      <Container99 />
      <Container100 />
      <Container99 />
      <Container101 />
    </div>
  );
}

function Container103() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container96 />
      <Container97 />
      <Container102 />
    </div>
  );
}

function OverlayBorder3() {
  return (
    <div className="basis-0 bg-white grow h-[92px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[92px] items-center p-[8px] relative w-full">
          <Container94 />
          <Container103 />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <OverlayBorder1 />
      <OverlayBorder3 />
    </div>
  );
}

function Overlay2() {
  return (
    <div className="basis-0 bg-[rgba(255,112,67,0.12)] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="basis-0 flex flex-col font-['Poppins:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ff7043] text-[13.891px] text-center">
        <p className="leading-[20px]">AP</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <Overlay2 />
    </div>
  );
}

function Svg27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container105() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[13.781px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Amit Patel</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Svg27 />
      <Container105 />
    </div>
  );
}

function OverlayBorder4() {
  return (
    <div className="bg-[rgba(38,98,217,0.2)] box-border content-stretch flex items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(38,98,217,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#2662d9] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">delivered</p>
      </div>
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame11 />
      <OverlayBorder4 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[13.563px] w-full">
        <p className="leading-[20px]">requested Kundali report</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[11.813px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">generated</p>
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9da4af] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">•</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff7043] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">₹300</p>
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">1 hour ago</p>
      </div>
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container108 />
      <Container109 />
      <Container110 />
      <Container109 />
      <Container111 />
    </div>
  );
}

function Container113() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container106 />
      <Container107 />
      <Container112 />
    </div>
  );
}

function OverlayBorder5() {
  return (
    <div className="basis-0 bg-white grow h-[92px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[92px] items-center p-[8px] relative w-full">
          <Container104 />
          <Container113 />
        </div>
      </div>
    </div>
  );
}

function Overlay3() {
  return (
    <div className="basis-0 bg-[rgba(255,112,67,0.12)] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px relative rounded-[9999px] shrink-0" data-name="Overlay">
      <div className="basis-0 flex flex-col font-['Poppins:SemiBold',sans-serif] grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[#ff7043] text-[14px] text-center">
        <p className="leading-[20px]">SD</p>
      </div>
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex items-start justify-center overflow-clip relative rounded-[9999px] shrink-0 size-[40px]" data-name="Container">
      <Overlay3 />
    </div>
  );
}

function Svg28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2a44c680} id="Vector" stroke="var(--stroke-0, #FF7043)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[13.781px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Sunita Devi</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Svg28 />
      <Container115 />
    </div>
  );
}

function OverlayBorder6() {
  return (
    <div className="bg-[rgba(239,67,67,0.2)] box-border content-stretch flex items-center px-[11px] py-[3px] relative rounded-[9999px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(239,67,67,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ef4343] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">missed</p>
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Frame12 />
      <OverlayBorder6 />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[13.672px] w-full">
        <p className="leading-[20px]">missed call attempt</p>
      </div>
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">0 min</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9da4af] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">•</p>
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#ff7043] text-[12px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">₹0</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[11.813px] text-nowrap">
        <p className="leading-[16px] whitespace-pre">3 hours ago</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container118 />
      <Container119 />
      <Container120 />
      <Container119 />
      <Container121 />
    </div>
  );
}

function Container123() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container116 />
      <Container117 />
      <Container122 />
    </div>
  );
}

function OverlayBorder7() {
  return (
    <div className="basis-0 bg-white grow h-[92px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[92px] items-center p-[8px] relative w-full">
          <Container114 />
          <Container123 />
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <OverlayBorder5 />
      <OverlayBorder7 />
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[609px]" data-name="Container">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-start p-[25px] relative rounded-[16px] shrink-0" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Heading16 />
      <Container124 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2939] text-[18px] text-nowrap">
        <p className="leading-[28px] whitespace-pre">Upcoming Schedule</p>
      </div>
    </div>
  );
}

function ButtonSvg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button → SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Button â SVG">
          <path clipRule="evenodd" d={svgPaths.p3316b480} fill="var(--fill-0, #98A2B3)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container125() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[6px] pt-0 px-0 relative shrink-0" data-name="Container">
      <ButtonSvg />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading17 />
      <Container125 />
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Wed, 11 jan</p>
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4.75px] items-start pb-[1.25px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container127 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">09:20 AM</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <Container128 />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Business Analytics Press</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8.5px] items-start pb-[1.5px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container130 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Exploring the Future of Data-Driven +6 more</p>
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center p-[12px] relative w-full">
          <Container129 />
          <Container131 />
        </div>
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Fri, 15 feb</p>
      </div>
    </div>
  );
}

function Container134() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4.75px] items-start pb-[1.25px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container133 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">10:35 AM</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <Container134 />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Business Sprint</p>
      </div>
    </div>
  );
}

function Container137() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8.5px] items-start pb-[1.5px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container136 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Techniques from Business Sprint +2 more</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center p-[12px] relative w-full">
          <Container135 />
          <Container137 />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4.75px] items-start leading-[0] not-italic pb-[1.25px] pt-0 px-0 relative shrink-0 text-nowrap" data-name="Paragraph">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center relative shrink-0 text-[#667085] text-[12px]">
        <p className="leading-[18px] text-nowrap whitespace-pre">Thu, 18 mar</p>
      </div>
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center relative shrink-0 text-[#344054] text-[14px]">
        <p className="leading-[20px] text-nowrap whitespace-pre">1:15 AM</p>
      </div>
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Container">
      <div className="bg-white relative rounded-[6px] shrink-0 size-[20px]" data-name="Background+Border">
        <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[6px]" />
      </div>
      <Paragraph1 />
    </div>
  );
}

function Container140() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#344054] text-[14px] text-nowrap">
        <p className="leading-[20px] whitespace-pre">Customer Review Meeting</p>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[8.5px] items-start pb-[1.5px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Container140 />
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#667085] text-[12px] text-nowrap">
        <p className="leading-[18px] whitespace-pre">Insights from the Customer Review Meeting +8 more</p>
      </div>
    </div>
  );
}

function Container142() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[14px] items-center p-[12px] relative w-full">
          <Container139 />
          <Container141 />
        </div>
      </div>
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[500px]" data-name="Container">
      <Container132 />
      <Container138 />
      <Container142 />
    </div>
  );
}

function Container144() {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-w-[539px] overflow-auto pb-[6px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container143 />
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="basis-0 bg-white grow h-[298px] min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e4e7ec] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] h-[298px] items-start p-[25px] relative w-full">
          <Container126 />
          <Container144 />
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[18px] items-start relative shrink-0 w-full">
      <BackgroundBorderShadow1 />
      <BackgroundBorder6 />
    </div>
  );
}

function Heading6Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[2px] pt-0 px-0 relative shrink-0" data-name="Heading 6:margin">
      <div className="flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-gray-900 text-nowrap">
        <p className="leading-[21.6px] whitespace-pre">Sales by Countries</p>
      </div>
    </div>
  );
}

function Image1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="image">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="image">
          <path d="M1.5 3.75L6 8.25L10.5 3.75" id="Vector" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ImageFill1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[40px] items-end justify-center left-0 overflow-clip pl-[108.5px] pr-px py-[14px] top-0 w-[121.5px]" data-name="image fill">
      <Image1 />
    </div>
  );
}

function Container145() {
  return (
    <div className="absolute h-[20px] left-[16px] overflow-clip top-[10px] w-[74.5px]" data-name="Container">
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-0 not-italic text-[14px] text-gray-900 text-nowrap top-[10.5px] translate-y-[-50%]">
        <p className="leading-[21px] whitespace-pre">This Month</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[8px] shrink-0 w-[121.5px]" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[rgba(209,213,219,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <ImageFill1 />
      <Container145 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-center flex flex-wrap items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading6Margin1 />
      <Options1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[12.38%_3.07%_12.38%_3.12%]" data-name="Group">
      <div className="absolute inset-[49.52%_28.83%_48.18%_70.05%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 10">
          <path clipRule="evenodd" d={svgPaths.p2161a00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.87%_51.44%_62.18%_47.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 4">
          <path clipRule="evenodd" d={svgPaths.p25a69b00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.58%_52.47%_43.15%_45.59%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 10">
          <path clipRule="evenodd" d={svgPaths.p304bbb80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.85%_45.62%_57.74%_52.87%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
          <path clipRule="evenodd" d={svgPaths.p26b16a80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.29%_47.93%_58.49%_51.14%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 5">
          <path clipRule="evenodd" d={svgPaths.pf547a00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.8%_22.88%_40.77%_76.87%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
          <path clipRule="evenodd" d={svgPaths.p12495900} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[65.29%_68.07%_29.06%_28.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 23">
          <path clipRule="evenodd" d={svgPaths.p1d10bf00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.17%_15.02%_52.75%_80.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 29">
          <path clipRule="evenodd" d={svgPaths.p33c37480} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[62.09%_45.01%_37.09%_54.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
          <path clipRule="evenodd" d={svgPaths.p20a0da00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.82%_52.06%_41.65%_47.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
          <path clipRule="evenodd" d={svgPaths.p30649a00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[48.65%_28.98%_50.73%_70.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
          <path clipRule="evenodd" d={svgPaths.p3f9e2a00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[53.07%_72.98%_46.68%_26.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path clipRule="evenodd" d={svgPaths.p1836ce80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.73%_45.38%_27.25%_52.22%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 17">
          <path clipRule="evenodd" d={svgPaths.p35b5bf80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.84%_62.12%_24.04%_27.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 70">
          <path clipRule="evenodd" d={svgPaths.pf1f7900} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.3%_73.17%_49.37%_26.39%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 6">
          <path clipRule="evenodd" d={svgPaths.p37b2ac00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.11%_44.52%_63.17%_53.09%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 11">
          <path clipRule="evenodd" d={svgPaths.p1d40a400} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[53.08%_76.07%_45.87%_23.71%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
          <path clipRule="evenodd" d={svgPaths.pee0080} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[14.9%_3.39%_57.7%_52.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 111">
          <path clipRule="evenodd" d={svgPaths.p1c175d00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[61.59%_44.99%_37.77%_54.61%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path clipRule="evenodd" d={svgPaths.p14a97780} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.79%_47.05%_58.27%_51.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 8">
          <path clipRule="evenodd" d={svgPaths.p13ee2d00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.99%_46.1%_64.64%_52.53%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 6">
          <path clipRule="evenodd" d={svgPaths.p24dfb400} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.63%_51.41%_62.1%_48.5%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
          <path clipRule="evenodd" d={svgPaths.p1d2bb500} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[57.43%_55.01%_40.88%_44.04%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 7">
          <path clipRule="evenodd" d={svgPaths.p10187a80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.68%_45.3%_59%_52.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 10">
          <path clipRule="evenodd" d={svgPaths.p3eadd980} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.65%_56.63%_43.78%_42.67%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
          <path clipRule="evenodd" d={svgPaths.p28007100} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[53.38%_76.13%_44.95%_22.92%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 7">
          <path clipRule="evenodd" d={svgPaths.p111f500} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.1%_46.1%_54.6%_52.29%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 14">
          <path clipRule="evenodd" d={svgPaths.p1e0bb900} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.11%_50.1%_39.45%_49.45%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path clipRule="evenodd" d={svgPaths.p27450200} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[57.5%_67.84%_39.57%_30.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 12">
          <path clipRule="evenodd" d={svgPaths.p18941280} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.18%_40.87%_57.65%_57.47%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5">
          <path clipRule="evenodd" d={svgPaths.p22297200} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[32.6%_52.61%_62.4%_45.05%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 21">
          <path clipRule="evenodd" d={svgPaths.p2c4b0a80} fill="var(--fill-0, #487FFF)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.09%_49.27%_37.32%_49.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
          <path clipRule="evenodd" d={svgPaths.p182c4200} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.67%_55.1%_42.15%_43.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
          <path clipRule="evenodd" d={svgPaths.p29fc1fb0} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.11%_56.68%_44.67%_42.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 1">
          <path clipRule="evenodd" d={svgPaths.p12d70e00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.38%_56.25%_68.4%_27.87%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 83 78">
          <path clipRule="evenodd" d={svgPaths.p37dc3180} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.83%_40.41%_51.57%_59.21%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
          <path clipRule="evenodd" d={svgPaths.p2d88d780} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.32%_52.78%_41.04%_46.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 11">
          <path clipRule="evenodd" d={svgPaths.p22584500} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.57%_37.42%_46.21%_60.62%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18">
          <path clipRule="evenodd" d={svgPaths.p38e63200} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.92%_39.68%_38.32%_57.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 24">
          <path clipRule="evenodd" d={svgPaths.pd06b400} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.19%_55.31%_48.29%_43.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
          <path clipRule="evenodd" d={svgPaths.p2608c500} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.33%_47.37%_58.12%_52.27%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
          <path clipRule="evenodd" d={svgPaths.pd6bac00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.38%_44.24%_54.43%_55.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <path clipRule="evenodd" d={svgPaths.pd9e1b80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.28%_42.81%_51.88%_56.14%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 8">
          <path clipRule="evenodd" d={svgPaths.p29ac65b0} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.61%_47.99%_58.4%_50.59%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 9">
          <path clipRule="evenodd" d={svgPaths.p18aecf00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.45%_71.76%_46.82%_27.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
          <path clipRule="evenodd" d={svgPaths.p1647400} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.46%_47.11%_60.1%_51.27%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
          <path clipRule="evenodd" d={svgPaths.p3bfbfb00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.18%_74.82%_44.61%_23.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 5">
          <path clipRule="evenodd" d={svgPaths.p3e4e4c00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[53.07%_70.2%_46.78%_29.45%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
          <path clipRule="evenodd" d={svgPaths.p1ee44000} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.67%_43.76%_52.91%_56.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
          <path clipRule="evenodd" d={svgPaths.p1d5c7b00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.85%_54.72%_55.54%_44.53%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 11">
          <path clipRule="evenodd" d={svgPaths.p13676900} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.47%_67.23%_26.92%_30.64%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
          <path clipRule="evenodd" d={svgPaths.p92e6b00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.96%_73.23%_42.12%_25.35%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4">
          <path clipRule="evenodd" d={svgPaths.p8047680} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[62.17%_12.29%_34.44%_83.86%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 14">
          <path clipRule="evenodd" d={svgPaths.pddb900} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[61.12%_70.99%_31.08%_25.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 32">
          <path clipRule="evenodd" d={svgPaths.p383c3f00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.43%_32.74%_49.36%_62.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 26">
          <path clipRule="evenodd" d={svgPaths.p10d2b300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[53.07%_19.98%_41.42%_77.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 23">
          <path clipRule="evenodd" d={svgPaths.ped97340} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.9%_46.77%_61.91%_50.7%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13">
          <path clipRule="evenodd" d={svgPaths.p1e836200} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[64.62%_44.3%_31.24%_52.74%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
          <path clipRule="evenodd" d={svgPaths.p2ef87d80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[31.98%_45.7%_66.79%_53.12%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
          <path clipRule="evenodd" d={svgPaths.p37ba5900} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.11%_43.45%_48.58%_53.47%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
          <path clipRule="evenodd" d={svgPaths.p2edc2c80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[70.7%_44.48%_23.49%_51.29%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 24">
          <path clipRule="evenodd" d={svgPaths.p41fe340} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[60.5%_72.7%_36.91%_25.87%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
          <path clipRule="evenodd" d={svgPaths.p103b0df0} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.68%_47.55%_56.93%_52.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
          <path clipRule="evenodd" d={svgPaths.p19312e00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[63%_46.76%_31.26%_50.06%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 24">
          <path clipRule="evenodd" d={svgPaths.p3943e500} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.58%_30.23%_57.44%_59.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56 33">
          <path clipRule="evenodd" d={svgPaths.p5a19880} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.66%_40.6%_40.49%_55.65%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path clipRule="evenodd" d={svgPaths.p1d09c200} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.79%_44.46%_29.33%_53.64%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12">
          <path clipRule="evenodd" d={svgPaths.p35f7b200} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.07%_52.25%_55.09%_44.58%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 16">
          <path clipRule="evenodd" d={svgPaths.p3b492000} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[53.34%_41.81%_44.38%_56.51%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
          <path clipRule="evenodd" d={svgPaths.pe78d3c0} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.2%_47.74%_58.11%_51.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path clipRule="evenodd" d={svgPaths.p3db86cf0} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.55%_45.23%_59.97%_54%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 6">
          <path clipRule="evenodd" d={svgPaths.p2b376180} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[66.29%_39.86%_27.82%_58.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 24">
          <path clipRule="evenodd" d={svgPaths.p3ebcdb00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.09%_53.35%_48.33%_42.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 27">
          <path clipRule="evenodd" d={svgPaths.p3b198d80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[40.1%_33.99%_55.69%_61.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 17">
          <path clipRule="evenodd" d={svgPaths.p35ebd070} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[48.64%_26.61%_43.41%_71.14%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 33">
          <path clipRule="evenodd" d={svgPaths.p2fee4000} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[50.17%_51.93%_43.37%_43.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 27">
          <path clipRule="evenodd" d={svgPaths.p22c1c100} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.55%_21.76%_57.92%_69.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 23">
          <path clipRule="evenodd" d={svgPaths.p2f98d00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.81%_47.05%_57.54%_52.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
          <path clipRule="evenodd" d={svgPaths.p3d549e00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[65.08%_43.7%_31.79%_55.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 13">
          <path clipRule="evenodd" d={svgPaths.p29714b00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.1%_54.4%_45.33%_42.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 23">
          <path clipRule="evenodd" d={svgPaths.p10255480} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[59.29%_43.9%_38.4%_54.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
          <path clipRule="evenodd" d={svgPaths.p1cc48600} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.11%_21.91%_39.35%_73.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 11">
          <path clipRule="evenodd" d={svgPaths.p3917b900} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.58%_75.73%_45.34%_16.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 33">
          <path clipRule="evenodd" d={svgPaths.p18226880} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[67.44%_9.21%_31.86%_90.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
          <path clipRule="evenodd" d={svgPaths.p2b91cbf0} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.06%_50.55%_39.9%_32.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 88 94">
          <path clipRule="evenodd" d={svgPaths.pe1369f2} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[24.63%_44.82%_68.28%_52.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 29">
          <path clipRule="evenodd" d={svgPaths.p3d137680} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.02%_5.97%_31.1%_93.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path clipRule="evenodd" d={svgPaths.p17209b00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[85.11%_68.15%_14.34%_31.04%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 3">
          <path clipRule="evenodd" d={svgPaths.p18367300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.62%_74.78%_43.62%_24.15%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 8">
          <path clipRule="evenodd" d={svgPaths.p397f2480} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.69%_51.19%_62.91%_47.93%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 6">
          <path clipRule="evenodd" d={svgPaths.p22e43a00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[15.49%_44.92%_67.16%_48.32%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 71">
          <path clipRule="evenodd" d={svgPaths.p3dee6e00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.41%_46.51%_26.22%_50.09%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
          <path clipRule="evenodd" d={svgPaths.p6f3fd00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[69.81%_9.4%_29.27%_89.89%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <path clipRule="evenodd" d={svgPaths.pa1d8b00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[50.85%_48.9%_44.08%_47.1%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
          <path clipRule="evenodd" d={svgPaths.p1cb93300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.11%_49.25%_40.83%_47.72%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17">
          <path clipRule="evenodd" d={svgPaths.p1e510500} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[76.45%_6.41%_17.46%_90.53%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 25">
          <path clipRule="evenodd" d={svgPaths.p32126000} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[47.66%_30.01%_50.58%_67.95%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 8">
          <path clipRule="evenodd" d={svgPaths.p327dec00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.58%_53.72%_40.88%_44.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 11">
          <path clipRule="evenodd" d={svgPaths.p1b0c2a80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.9%_50.32%_60.1%_48.59%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 5">
          <path clipRule="evenodd" d={svgPaths.p15a68300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.74%_70.57%_37.23%_26.39%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 29">
          <path clipRule="evenodd" d={svgPaths.p1369ec00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[35.74%_17.79%_46.9%_66.27%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 84 71">
          <path clipRule="evenodd" d={svgPaths.p101bf900} fill="var(--fill-0, #487FFF)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.56%_48.86%_39.77%_49.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 19">
          <path clipRule="evenodd" d={svgPaths.p1e9c1580} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[68.74%_70.55%_12.38%_27.26%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 77">
          <path clipRule="evenodd" d={svgPaths.p2178e300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[12.82%_66.8%_57.95%_10.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 121 119">
          <path clipRule="evenodd" d={svgPaths.p27acf200} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[59.49%_48.23%_36.88%_49.93%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
          <path clipRule="evenodd" d={svgPaths.p24bb4f00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.31%_45.9%_40.05%_50.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
          <path clipRule="evenodd" d={svgPaths.p19132a00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.83%_44.92%_33.31%_50.21%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 32">
          <path clipRule="evenodd" d={svgPaths.pc2080} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.08%_48.14%_61.62%_50.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
          <path clipRule="evenodd" d={svgPaths.p2f6e9300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.27%_74.65%_42.56%_24.59%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 5">
          <path clipRule="evenodd" d={svgPaths.p23b780} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[50.98%_72.44%_47.64%_24.87%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 6">
          <path clipRule="evenodd" d={svgPaths.p3c26d000} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[72.32%_44.66%_27.04%_55.03%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
          <path clipRule="evenodd" d={svgPaths.p280c1a80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.39%_42.02%_53.35%_56.37%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 10">
          <path clipRule="evenodd" d={svgPaths.p3c82ae00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.31%_32.09%_56.75%_65.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 8">
          <path clipRule="evenodd" d={svgPaths.p8eafb80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.74%_42.14%_37.02%_55.87%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 18">
          <path clipRule="evenodd" d={svgPaths.p31b1b300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.83%_43.83%_40.53%_53.3%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
          <path clipRule="evenodd" d={svgPaths.p2a1add80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.5%_67.16%_39.8%_31.86%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 7">
          <path clipRule="evenodd" d={svgPaths.p3ccac980} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.82%_24.93%_43.53%_73.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
          <path clipRule="evenodd" d={svgPaths.p29d34c00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[54.87%_75.97%_44.68%_23.48%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path clipRule="evenodd" d={svgPaths.p12799e80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.94%_47.17%_61.18%_51.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4">
          <path clipRule="evenodd" d={svgPaths.p9f12180} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.74%_19.22%_54.34%_79.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
          <path clipRule="evenodd" d={svgPaths.p1d673980} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.42%_48.73%_59.94%_50.6%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
          <path clipRule="evenodd" d={svgPaths.p13552d00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.5%_18.91%_55.96%_79.51%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 11">
          <path clipRule="evenodd" d={svgPaths.p24f41300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[53.92%_56.04%_44.32%_42.44%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
          <path clipRule="evenodd" d={svgPaths.pe008000} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.77%_55.76%_41.93%_43.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 6">
          <path clipRule="evenodd" d={svgPaths.p152a4a80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[64.03%_10.64%_34.36%_87.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <path clipRule="evenodd" d={svgPaths.p16ad8100} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.84%_38.5%_46.11%_56.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
          <path clipRule="evenodd" d={svgPaths.p167f1300} fill="var(--fill-0, #487FFF)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[25.43%_46.82%_65.51%_49.9%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 37">
          <path clipRule="evenodd" d={svgPaths.pc7dac00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.51%_43.03%_42.72%_52.76%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 24">
          <path clipRule="evenodd" d={svgPaths.pa14a480} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.46%_70.91%_46.65%_28.23%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 4">
          <path clipRule="evenodd" d={svgPaths.p23728e80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.64%_41.73%_43.73%_57.91%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
          <path clipRule="evenodd" d={svgPaths.p20e067f0} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.19%_49.73%_65.19%_49.13%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 7">
          <path clipRule="evenodd" d={svgPaths.p2e1a8d00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.84%_49.13%_60.95%_48.59%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 17">
          <path clipRule="evenodd" d={svgPaths.p3ff55400} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.85%_39.18%_44.44%_58.17%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 11">
          <path clipRule="evenodd" d={svgPaths.p1c5b2d80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[38.23%_48.61%_60.46%_49.51%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
          <path clipRule="evenodd" d={svgPaths.p3a945900} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.43%_49.92%_47.28%_44.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 34">
          <path clipRule="evenodd" d={svgPaths.p3e782b00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[23.7%_3.07%_47.23%_3.12%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 490 118">
          <path clipRule="evenodd" d={svgPaths.p2da95780} fill="var(--fill-0, #487FFF)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[33.01%_45.69%_65.67%_52.52%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
          <path clipRule="evenodd" d={svgPaths.p212b3400} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[74.38%_66.96%_23.42%_31.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 9">
          <path clipRule="evenodd" d={svgPaths.p8f84370} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.65%_43.49%_53.71%_56.21%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
          <path clipRule="evenodd" d={svgPaths.p3ec05700} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[51.31%_24.94%_45.01%_73.19%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 15">
          <path clipRule="evenodd" d={svgPaths.p11e83400} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[50.04%_21.18%_48.63%_78.4%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 6">
          <path clipRule="evenodd" d={svgPaths.p3aa1a800} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.41%_68.96%_43.31%_30.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 2">
          <path clipRule="evenodd" d={svgPaths.p21699c00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.9%_41.36%_55.06%_53.82%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 13">
          <path clipRule="evenodd" d={svgPaths.p14390400} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.9%_31.67%_41.58%_67.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 7">
          <path clipRule="evenodd" d={svgPaths.p1e656380} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.32%_50.05%_52.42%_48.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 14">
          <path clipRule="evenodd" d={svgPaths.p11b38780} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[64.64%_19.81%_35%_79.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 2">
          <path clipRule="evenodd" d={svgPaths.p29c1dd72} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[41.6%_35.66%_54.77%_60.74%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 15">
          <path clipRule="evenodd" d={svgPaths.p220163f0} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.52%_33.46%_55.5%_64.65%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 8">
          <path clipRule="evenodd" d={svgPaths.p295b3300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[73.7%_45.39%_25.48%_54.08%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
          <path clipRule="evenodd" d={svgPaths.p16c7d080} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[52.23%_25.45%_41.46%_72.48%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 26">
          <path clipRule="evenodd" d={svgPaths.p2710c080} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[83.75%_34.61%_15.75%_64.97%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
          <path clipRule="evenodd" d={svgPaths.p2ce14d80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[56.35%_52.57%_41.56%_47.01%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 9">
          <path clipRule="evenodd" d={svgPaths.p38a33980} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[50.89%_46.8%_42.21%_50.56%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 28">
          <path clipRule="evenodd" d={svgPaths.p31bc0a00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.38%_46.47%_47.54%_49.46%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 25">
          <path clipRule="evenodd" d={svgPaths.p9d90300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.71%_38.31%_48.81%_60.51%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 6">
          <path clipRule="evenodd" d={svgPaths.p3506e180} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[55.89%_68.68%_39.33%_27.88%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
          <path clipRule="evenodd" d={svgPaths.p22bc9300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.76%_33.42%_51.94%_62.84%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
          <path clipRule="evenodd" d={svgPaths.p34642f90} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[44.3%_40.41%_51.83%_57.16%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
          <path clipRule="evenodd" d={svgPaths.p34906000} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.32%_56.62%_70.68%_40.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 9">
          <path clipRule="evenodd" d={svgPaths.p659e500} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.16%_36.5%_49.99%_58.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 28">
          <path clipRule="evenodd" d={svgPaths.p4d3fe80} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.36%_40.89%_56.48%_58.42%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 5">
          <path clipRule="evenodd" d={svgPaths.p15a3af00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[39.29%_48.22%_55.45%_48.78%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 22">
          <path clipRule="evenodd" d={svgPaths.p2a0a6800} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[50.92%_24.48%_42.73%_73.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 26">
          <path clipRule="evenodd" d={svgPaths.p2d65e180} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[70.59%_67.06%_12.59%_27.83%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 68">
          <path clipRule="evenodd" d={svgPaths.p210a1600} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[65.71%_12.93%_19.06%_76.65%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 62">
          <path clipRule="evenodd" d={svgPaths.p385ccc00} fill="var(--fill-0, #487FFF)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[46.3%_43.68%_52.14%_55.98%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7">
          <path clipRule="evenodd" d={svgPaths.pcfe3300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[45.25%_27.6%_42.45%_64.85%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 50">
          <path clipRule="evenodd" d={svgPaths.p2ac40f40} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[61.49%_42.54%_33.98%_54.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
          <path clipRule="evenodd" d={svgPaths.p1ff36900} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[42.05%_39.91%_56.25%_58.73%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 7">
          <path clipRule="evenodd" d={svgPaths.p36438bf0} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[34.77%_54.62%_63.35%_44.43%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
          <path clipRule="evenodd" d={svgPaths.pf087a00} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[58.74%_16.19%_34.57%_71.92%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63 27">
          <path clipRule="evenodd" d={svgPaths.p138af2c0} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[36.37%_42.57%_59.36%_52.8%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 18">
          <path clipRule="evenodd" d={svgPaths.p1c588300} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[49.66%_39.56%_49.75%_60.28%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 3">
          <path clipRule="evenodd" d={svgPaths.p27465500} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[65.55%_42.39%_27.29%_54.91%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 29">
          <path clipRule="evenodd" d={svgPaths.p26a10180} fill="var(--fill-0, #D1D5DB)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[26.24%_16.72%_26.24%_5.54%]" data-name="Group">
      <div className="absolute inset-[44.06%_26.18%_53.47%_71.8%]" data-name="Vector">
        <div className="absolute inset-[-5%_-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
            <path d={svgPaths.pa6bbf00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[71.29%_16.72%_26.24%_81.27%]" data-name="Vector">
        <div className="absolute inset-[-5%_-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
            <path d={svgPaths.pa6bbf00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[26.24%_92.45%_71.29%_5.54%]" data-name="Vector">
        <div className="absolute inset-[-5%_-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
            <path d={svgPaths.pa6bbf00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.96%_78.95%_55.57%_19.03%]" data-name="Vector">
        <div className="absolute inset-[-5%_-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
            <path d={svgPaths.pa6bbf00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[35.15%_52.37%_62.38%_45.62%]" data-name="Vector">
        <div className="absolute inset-[-5%_-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
            <path d={svgPaths.pa6bbf00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.4" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[49.5%_40.48%_48.02%_57.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-4.76%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 11">
            <path d={svgPaths.pa6bbf00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, black)" strokeOpacity="0.4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="h-[404px] relative shrink-0 w-full" data-name="SVG">
      <Group />
      <Group1 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-gray-300 box-border content-stretch flex flex-col items-center left-[10px] pl-[3px] pr-[2.41px] py-[3px] rounded-[3px] size-[16px] top-[10px]" data-name="Background">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-900 text-nowrap">
        <p className="leading-[10px] whitespace-pre">+</p>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-gray-300 box-border content-stretch flex flex-col items-center left-[10px] pl-[3px] pr-[2.41px] py-[3px] rounded-[3px] size-[16px] top-[30px]" data-name="Background">
      <div className="flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-gray-900 text-nowrap">
        <p className="leading-[10px] whitespace-pre">−</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px overflow-clip relative shrink-0 w-full" data-name="Container">
      <Svg29 />
      <Background5 />
      <Background6 />
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="basis-0 bg-gray-100 grow min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(209,213,219,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-center p-px relative size-full">
          <Container147 />
        </div>
      </div>
    </div>
  );
}

function Flag1Png() {
  return (
    <div className="max-w-[91.63px] relative rounded-[20px] shrink-0 size-[40px]" data-name="flag1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFlag1Png} />
      </div>
    </div>
  );
}

function ImgMargin() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-start max-w-[103.63px] pl-0 pr-[12px] py-0 relative shrink-0 w-[52px]" data-name="Img:margin">
      <Flag1Png />
    </div>
  );
}

function Heading18() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.55px] relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 w-full">
        <p className="leading-[16.8px]">USA</p>
      </div>
    </div>
  );
}

function Container148() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2.69px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Heading18 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] mb-[-0.55px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap">
        <p className="leading-[20.4px] whitespace-pre">1,240 Users</p>
      </div>
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Container">
      <ImgMargin />
      <Container148 />
    </div>
  );
}

function Background7() {
  return <div className="bg-[#487fff] h-full rounded-[800px] shrink-0 w-[243px]" data-name="Background" />;
}

function ProgressbarSuccessExample() {
  return (
    <div className="bg-[#ebecef] content-stretch flex h-[8px] items-start overflow-clip relative rounded-[800px] shrink-0 w-full" data-name="Progressbar - Success example">
      <Background7 />
    </div>
  );
}

function Container150() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <ProgressbarSuccessExample />
    </div>
  );
}

function Container151() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">80%</p>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container150 />
      <Container151 />
    </div>
  );
}

function Container153() {
  return (
    <div className="box-border content-stretch flex gap-[18px] items-center pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container149 />
      <Container152 />
    </div>
  );
}

function Flag2Png() {
  return (
    <div className="max-w-[93.64px] relative rounded-[20px] shrink-0 size-[40px]" data-name="flag2.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFlag2Png} />
      </div>
    </div>
  );
}

function ImgMargin1() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-start max-w-[105.64px] pl-0 pr-[12px] py-0 relative shrink-0 w-[52px]" data-name="Img:margin">
      <Flag2Png />
    </div>
  );
}

function Heading19() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.55px] relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 w-full">
        <p className="leading-[16.8px]">Japan</p>
      </div>
    </div>
  );
}

function Container154() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2.69px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Heading19 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] mb-[-0.55px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap">
        <p className="leading-[20.4px] whitespace-pre">1,240 Users</p>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Container">
      <ImgMargin1 />
      <Container154 />
    </div>
  );
}

function Background8() {
  return <div className="bg-[#f86624] h-full rounded-[800px] shrink-0 w-[144px]" data-name="Background" />;
}

function ProgressbarSuccessExample1() {
  return (
    <div className="bg-[#ebecef] content-stretch flex h-[8px] items-start overflow-clip relative rounded-[800px] shrink-0 w-full" data-name="Progressbar - Success example">
      <Background8 />
    </div>
  );
}

function Container156() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <ProgressbarSuccessExample1 />
    </div>
  );
}

function Container157() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">60%</p>
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container156 />
      <Container157 />
    </div>
  );
}

function Container159() {
  return (
    <div className="box-border content-stretch flex gap-[18px] items-center pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container155 />
      <Container158 />
    </div>
  );
}

function Flag3Png() {
  return (
    <div className="max-w-[98.39px] relative rounded-[20px] shrink-0 size-[40px]" data-name="flag3.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFlag3Png} />
      </div>
    </div>
  );
}

function ImgMargin2() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-start max-w-[110.39px] pl-0 pr-[12px] py-0 relative shrink-0 w-[52px]" data-name="Img:margin">
      <Flag3Png />
    </div>
  );
}

function Heading20() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.55px] relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap">
        <p className="leading-[16.8px] whitespace-pre">France</p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2.69px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Heading20 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] mb-[-0.55px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap">
        <p className="leading-[20.4px] whitespace-pre">1,240 Users</p>
      </div>
    </div>
  );
}

function Container161() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Container">
      <ImgMargin2 />
      <Container160 />
    </div>
  );
}

function Background9() {
  return <div className="bg-[#f4941e] h-full rounded-[800px] shrink-0 w-[98px]" data-name="Background" />;
}

function ProgressbarSuccessExample2() {
  return (
    <div className="bg-[#ebecef] content-stretch flex h-[8px] items-start overflow-clip relative rounded-[800px] shrink-0 w-full" data-name="Progressbar - Success example">
      <Background9 />
    </div>
  );
}

function Container162() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <ProgressbarSuccessExample2 />
    </div>
  );
}

function Container163() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">49%</p>
      </div>
    </div>
  );
}

function Container164() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container162 />
      <Container163 />
    </div>
  );
}

function Container165() {
  return (
    <div className="box-border content-stretch flex gap-[18px] items-center pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container161 />
      <Container164 />
    </div>
  );
}

function Flag4Png() {
  return (
    <div className="max-w-[113.69px] relative rounded-[20px] shrink-0 size-[40px]" data-name="flag4.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFlag4Png} />
      </div>
    </div>
  );
}

function ImgMargin3() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-start max-w-[125.69px] pl-0 pr-[12px] py-0 relative shrink-0 w-[52px]" data-name="Img:margin">
      <Flag4Png />
    </div>
  );
}

function Heading21() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.55px] relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 w-full">
        <p className="leading-[16.8px]">Germany</p>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2.69px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Heading21 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] mb-[-0.55px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap">
        <p className="leading-[20.4px] whitespace-pre">1,240 Users</p>
      </div>
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Container">
      <ImgMargin3 />
      <Container166 />
    </div>
  );
}

function Background10() {
  return <div className="basis-0 bg-[#45b369] grow h-full min-h-px min-w-px rounded-[800px] shrink-0" data-name="Background" />;
}

function ProgressbarSuccessExample3() {
  return (
    <div className="bg-[#ebecef] content-stretch flex h-[8px] items-start justify-center overflow-clip relative rounded-[800px] shrink-0 w-full" data-name="Progressbar - Success example">
      <Background10 />
    </div>
  );
}

function Container168() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <ProgressbarSuccessExample3 />
    </div>
  );
}

function Container169() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">100%</p>
      </div>
    </div>
  );
}

function Container170() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container168 />
      <Container169 />
    </div>
  );
}

function Container171() {
  return (
    <div className="box-border content-stretch flex gap-[18px] items-center pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container167 />
      <Container170 />
    </div>
  );
}

function Flag5Png() {
  return (
    <div className="max-w-[91.74px] relative rounded-[20px] shrink-0 size-[40px]" data-name="flag5.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFlag5Png} />
      </div>
    </div>
  );
}

function ImgMargin4() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-start max-w-[103.74px] pl-0 pr-[12px] py-0 relative shrink-0 w-[52px]" data-name="Img:margin">
      <Flag5Png />
    </div>
  );
}

function Heading22() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.545px] relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap">
        <p className="leading-[16.8px] whitespace-pre">South Korea</p>
      </div>
    </div>
  );
}

function Container172() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2.69px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Heading22 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] mb-[-0.545px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap">
        <p className="leading-[20.4px] whitespace-pre">1,240 Users</p>
      </div>
    </div>
  );
}

function Container173() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Container">
      <ImgMargin4 />
      <Container172 />
    </div>
  );
}

function Background11() {
  return <div className="bg-[#144bd6] h-full rounded-[800px] shrink-0 w-[80px]" data-name="Background" />;
}

function ProgressbarSuccessExample4() {
  return (
    <div className="bg-[#ebecef] content-stretch flex h-[8px] items-start overflow-clip relative rounded-[800px] shrink-0 w-full" data-name="Progressbar - Success example">
      <Background11 />
    </div>
  );
}

function Container174() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <ProgressbarSuccessExample4 />
    </div>
  );
}

function Container175() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">30%</p>
      </div>
    </div>
  );
}

function Container176() {
  return (
    <div className="basis-0 content-stretch flex gap-[8.01px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container174 />
      <Container175 />
    </div>
  );
}

function Container177() {
  return (
    <div className="box-border content-stretch flex gap-[18px] items-center pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container173 />
      <Container176 />
    </div>
  );
}

function Flag5Png1() {
  return (
    <div className="max-w-[91.74px] relative rounded-[20px] shrink-0 size-[40px]" data-name="flag5.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFlag5Png} />
      </div>
    </div>
  );
}

function ImgMargin5() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-start max-w-[103.74px] pl-0 pr-[12px] py-0 relative shrink-0 w-[52px]" data-name="Img:margin">
      <Flag5Png1 />
    </div>
  );
}

function Heading23() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.545px] relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 text-nowrap">
        <p className="leading-[16.8px] whitespace-pre">Saudi Arabia</p>
      </div>
    </div>
  );
}

function Container178() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2.69px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Heading23 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] mb-[-0.545px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap">
        <p className="leading-[20.4px] whitespace-pre">1,240 Users</p>
      </div>
    </div>
  );
}

function Container179() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[150px]" data-name="Container">
      <ImgMargin5 />
      <Container178 />
    </div>
  );
}

function Background12() {
  return <div className="bg-[#afd614] h-full rounded-[800px] shrink-0 w-[235px]" data-name="Background" />;
}

function ProgressbarSuccessExample5() {
  return (
    <div className="bg-[#ebecef] content-stretch flex h-[8px] items-start overflow-clip relative rounded-[800px] shrink-0 w-full" data-name="Progressbar - Success example">
      <Background12 />
    </div>
  );
}

function Container180() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <ProgressbarSuccessExample5 />
    </div>
  );
}

function Container181() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">96%</p>
      </div>
    </div>
  );
}

function Container182() {
  return (
    <div className="basis-0 content-stretch flex gap-[8.01px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container180 />
      <Container181 />
    </div>
  );
}

function Container183() {
  return (
    <div className="box-border content-stretch flex gap-[18px] items-center pb-[2px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <Container179 />
      <Container182 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[3px] top-[5px] w-[461.25px]">
      <Container153 />
      <Container159 />
      <Container165 />
      <Container171 />
      <Container177 />
      <Container183 />
    </div>
  );
}

function Flag1Png1() {
  return (
    <div className="max-w-[91.63px] relative rounded-[20px] shrink-0 size-[40px]" data-name="flag1.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgFlag1Png} />
      </div>
    </div>
  );
}

function ImgMargin6() {
  return (
    <div className="box-border content-stretch flex flex-col h-[40px] items-start max-w-[103.63px] pl-0 pr-[12px] py-0 relative shrink-0 w-[52px]" data-name="Img:margin">
      <Flag1Png1 />
    </div>
  );
}

function Heading24() {
  return (
    <div className="box-border content-stretch flex flex-col items-start mb-[-0.55px] relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-gray-900 w-full">
        <p className="leading-[16.8px]">USA</p>
      </div>
    </div>
  );
}

function Container184() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[2.69px] pt-0 px-0 relative shrink-0" data-name="Container">
      <Heading24 />
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[20.4px] mb-[-0.55px] not-italic relative shrink-0 text-[12px] text-gray-600 text-nowrap whitespace-pre">
        <p className="mb-0">1,240</p>
        <p>Users</p>
      </div>
    </div>
  );
}

function Container185() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <ImgMargin6 />
      <Container184 />
    </div>
  );
}

function Background13() {
  return <div className="bg-[#487fff] h-full rounded-[800px] shrink-0 w-[37.4px]" data-name="Background" />;
}

function ProgressbarSuccessExample6() {
  return (
    <div className="bg-[#ebecef] content-stretch flex h-[8px] items-start overflow-clip relative rounded-[800px] shrink-0 w-full" data-name="Progressbar - Success example">
      <Background13 />
    </div>
  );
}

function Container186() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start max-w-[66px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <ProgressbarSuccessExample6 />
    </div>
  );
}

function Container187() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-gray-600 text-nowrap">
        <p className="leading-[27.2px] whitespace-pre">80%</p>
      </div>
    </div>
  );
}

function Container188() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Container">
      <Container186 />
      <Container187 />
    </div>
  );
}

function Container189() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-0 right-[19.75px] top-[403.75px]" data-name="Container">
      <Container185 />
      <Container188 />
    </div>
  );
}

function Container190() {
  return (
    <div className="h-[372px] max-h-[372px] overflow-auto relative shrink-0 w-full" data-name="Container">
      <Frame17 />
      <Container189 />
    </div>
  );
}

function Border() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[8px] self-stretch shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(209,213,219,0.5)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[17px] pr-px py-[17px] relative size-full">
          <Container190 />
        </div>
      </div>
    </div>
  );
}

function Container191() {
  return (
    <div className="content-stretch flex flex-wrap gap-[18px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder7 />
      <Border />
    </div>
  );
}

function Container192() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[18px] items-center px-[24px] py-[14px] relative size-full">
          <Container146 />
          <Container191 />
        </div>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="basis-0 bg-white box-border content-stretch flex flex-col gap-[18px] grow h-[503px] items-start justify-center min-h-px min-w-px relative rounded-[8px] shadow-[0px_4px_30px_0px_rgba(46,45,116,0.05)] shrink-0" data-name="Background+Shadow">
      <Container192 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[18px] items-start justify-center relative shrink-0 w-full">
      <BackgroundShadow1 />
    </div>
  );
}

function Container193() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame15 />
      <Container83 />
      <Frame7 />
      <Frame1 />
    </div>
  );
}

function Main() {
  return (
    <div className="max-w-[1536px] relative shrink-0 w-full z-[1]" data-name="Main">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[18px] items-start max-w-inherit p-[18px] relative w-full">
          <Container193 />
        </div>
      </div>
    </div>
  );
}

function Container194() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-[1564px] isolate items-start min-h-px min-w-px relative shrink-0" data-name="Container">
      <Header />
      <Main />
    </div>
  );
}

function Container195() {
  return (
    <div className="content-stretch flex h-[1615px] items-start relative shrink-0 w-full" data-name="Container">
      <Aside />
      <Container194 />
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Dashboard" style={{ backgroundImage: "linear-gradient(90deg, rgb(249, 250, 251) 0%, rgb(249, 250, 251) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container195 />
    </div>
  );
}