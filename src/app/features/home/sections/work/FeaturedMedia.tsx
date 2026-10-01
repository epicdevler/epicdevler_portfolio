import { Box } from "@chakra-ui/react";
import type { CSSProperties, ReactNode } from "react";
import { MediaSlot } from "@/components/media/MediaSlot";
import { brandColorFor } from "@/content/project-brands";
import type { Project } from "@/content/types";
import { PHONE_PLACEHOLDERS, urlLabel } from "./work-content";

const gridLines = (line: string) =>
  `linear-gradient(${line} 1px, transparent 1px), linear-gradient(to right, ${line} 1px, transparent 1px)`;

const panelGrid = gridLines("{colors.border.grid.inverted}");

/**
 * Brand-tinted panel recipe. The brand hex is passed in through the
 * `--work-brand` custom property (set inline per project) so these strings
 * stay static and token references still resolve.
 */
const BRAND_VAR = "--work-brand";
const brand = `var(${BRAND_VAR})`;
const brandPanelBg = `color-mix(in oklab, ${brand} 22%, {colors.bg.inverted.panel})`;
const brandGlow = `radial-gradient(ellipse 70% 60% at 50% 38%, color-mix(in oklab, ${brand} 24%, transparent), transparent 72%)`;
const brandGrid = gridLines(
  `color-mix(in oklab, color-mix(in oklab, ${brand} 35%, white) 5.5%, transparent)`,
);

const PHONE_OFFSETS = ["18%", "0", "9%"] as const;

/**
 * Full-width dark panel with a faint 48px grid. Web projects get a browser
 * frame + overlapping phone; mobile projects get three staggered phones.
 * With a brand colour (see `project-brands.ts`) the panel becomes a deep tint
 * of it with a soft glow behind the frames; otherwise it stays plain ink.
 */
export function FeaturedMedia({ project }: { project: Project }) {
  const isWeb = project.platforms.includes("Web");
  const brandColor = brandColorFor(project.slug);

  return (
    <Box
      position="relative"
      bgColor={brandColor ? brandPanelBg : "bg.inverted.panel"}
      bgImage={brandColor ? brandGlow : undefined}
      borderRadius="panel"
      overflow="hidden"
      pt="clamp(20px, 5vw, 72px)"
      px="clamp(20px, 5vw, 72px)"
      pb={isWeb ? "0" : "clamp(20px, 5vw, 72px)"}
      style={
        brandColor
          ? ({ [BRAND_VAR]: brandColor } as CSSProperties)
          : undefined
      }
    >
      <Box
        aria-hidden
        position="absolute"
        inset="0"
        pointerEvents="none"
        bgImage={brandColor ? brandGrid : panelGrid}
        bgSize="48px 48px"
      />
      {isWeb ? <WebFrames project={project} /> : <PhoneFrames project={project} />}
    </Box>
  );
}

function WebFrames({ project }: { project: Project }): ReactNode {
  const mobile = project.gallery?.[0];

  return (
    <>
      {/* Browser frame */}
      <Box
        position="relative"
        w="82%"
        bg="bg.canvas"
        borderTopRadius="frame"
        overflow="hidden"
        shadow="device"
      >
        <Box
          display="flex"
          alignItems="center"
          gap="6px"
          py="11px"
          px="14px"
          bg="bg.chrome"
          borderBottomWidth="1px"
          borderColor="border.chrome"
          aria-hidden
        >
          {[0, 1, 2].map((i) => (
            <Box
              key={i}
              as="span"
              display="block"
              boxSize="9px"
              flexShrink={0}
              borderRadius="full"
              bg="bg.chrome.dot"
            />
          ))}
          <Box
            as="span"
            ml="12px"
            fontFamily="mono"
            fontSize="11px"
            color="fg.muted"
            bg="bg.canvas"
            py="3px"
            px="12px"
            borderRadius="pill"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            minW="0"
          >
            {urlLabel(project)}
          </Box>
        </Box>
        <MediaSlot
          src={project.image?.src}
          alt={project.image?.alt ?? project.title}
          caption={project.placeholder}
          aspectRatio="16 / 9"
          objectPosition="top"
          sizes="(min-width: 1440px) 940px, 72vw"
          placeholderTone="paper"
        />
      </Box>

      {/* Phone frame: gallery mobile shot, else a top-left crop of the desktop image. */}
      <Box
        position="absolute"
        right="clamp(16px, 4vw, 64px)"
        bottom="clamp(24px, 5vw, 72px)"
        w="24%"
        minW="120px"
        aspectRatio="9 / 17"
        borderRadius="canvas"
        overflow="hidden"
        borderWidth="6px"
        borderColor="border.inverted.subtle"
        shadow="device"
        bg="bg.canvas"
      >
        <MediaSlot
          src={mobile?.src ?? project.image?.src}
          alt=""
          caption={`${project.title} — mobile`}
          objectPosition={mobile ? "top" : "left top"}
          sizes="(min-width: 1440px) 300px, (min-width: 500px) 24vw, 120px"
          placeholderTone="paper"
        />
      </Box>
    </>
  );
}

function PhoneFrames({ project }: { project: Project }): ReactNode {
  const shots = project.gallery?.slice(0, 3);
  const captions = PHONE_PLACEHOLDERS[project.slug] ?? [
    project.placeholder ?? project.title,
  ];
  const slots = shots?.length
    ? shots.map((shot) => ({ key: shot.src, src: shot.src, caption: shot.alt }))
    : captions.map((caption) => ({ key: caption, src: undefined, caption }));

  return (
    <Box
      position="relative"
      maxW="860px"
      mx="auto"
      display="grid"
      gridTemplateColumns={`repeat(${slots.length}, 1fr)`}
      gap="clamp(12px, 2vw, 28px)"
      aria-hidden
    >
      {slots.map((slot, i) => (
        <Box
          key={slot.key}
          aspectRatio="9 / 19"
          borderRadius="device"
          overflow="hidden"
          borderWidth="6px"
          borderColor="border.inverted.subtle"
          bg="bg.canvas"
          shadow="device"
          mt={PHONE_OFFSETS[i % PHONE_OFFSETS.length]}
        >
          <MediaSlot
            src={slot.src}
            alt=""
            caption={slot.caption}
            objectPosition="top"
            sizes="(min-width: 1440px) 260px, 28vw"
            placeholderTone="paper"
          />
        </Box>
      ))}
    </Box>
  );
}
