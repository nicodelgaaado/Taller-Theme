import type { ReactNode } from "react";

export default function Home() {
  const accentColors = ["#E68170", "#F0DA67", "#86DB83", "#5449DA", "#CE76CE"];

  return (
    <div className="min-h-screen bg-[#f2f2f5] px-4 py-6 sm:py-10 lg:py-5">
      <main className="mx-auto w-full max-w-[860px] rounded-[30px] border border-[#e6e6eb] bg-[#fcfcfd] px-5 py-6 shadow-[0_24px_45px_rgba(33,33,52,0.1),0_2px_6px_rgba(25,25,40,0.05)] sm:px-8 sm:py-8 lg:max-w-[760px] lg:px-8 lg:py-7">
        <section className="border-b border-[#ededf0] pb-5 lg:pb-4">
          <h1 className="text-[32px] font-semibold tracking-[-0.03em] text-[#202028] sm:text-[40px] lg:text-[34px]">
            Appearance
          </h1>
          <p className="mt-1 text-[17px] text-[#8d8d96] sm:text-[25px] lg:text-[20px]">
            Set or customize your preferences for the system
          </p>
        </section>

        <section className="border-b border-[#ededf0] py-4 sm:py-5 lg:py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-[27px] font-semibold text-[#25252e] sm:text-[36px] lg:text-[30px]">
                Language
              </h2>
              <p className="mt-1 text-[17px] text-[#8d8d96] sm:text-[24px] lg:text-[19px]">
                Select the language of the platform
              </p>
            </div>
            <button className="flex h-[54px] w-full items-center justify-between rounded-[16px] border border-[#dadbe0] bg-white px-5 text-[18px] text-[#45454d] shadow-[0_2px_6px_rgba(16,16,24,0.05)] sm:h-[58px] sm:w-[285px] sm:text-[23px] lg:h-[52px] lg:text-[20px]">
              English
              <svg
                className="h-5 w-5 text-[#686871] sm:h-6 sm:w-6 lg:h-5 lg:w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7 10L12 15L17 10"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>

        <section className="border-b border-[#ededf0] py-5 sm:py-6 lg:py-4">
          <h2 className="text-[27px] font-semibold text-[#25252e] sm:text-[36px] lg:text-[30px]">
            Interface theme
          </h2>
          <p className="mt-1 text-[17px] text-[#8d8d96] sm:text-[24px] lg:text-[19px]">
            Customize your application appereance
          </p>

          <div className="mt-4 grid gap-4 sm:mt-5 sm:grid-cols-3 sm:gap-4 lg:gap-3">
            <ThemeCard label="Auto" type="auto" />
            <ThemeCard label="Light" type="light" active />
            <ThemeCard label="Dark" type="dark" />
          </div>
        </section>

        <section className="border-b border-[#ededf0] py-4 sm:py-5 lg:py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-[27px] font-semibold text-[#25252e] sm:text-[36px] lg:text-[30px]">
                Accent color
              </h2>
              <p className="mt-1 text-[17px] text-[#8d8d96] sm:text-[24px] lg:text-[19px]">
                Pick your platform&apos;s main color
              </p>
            </div>
            <div className="flex items-center gap-3 self-end sm:self-auto">
              {accentColors.map((color) => (
                <span
                  key={color}
                  className="h-9 w-9 rounded-full border border-white/60 shadow-[0_3px_8px_rgba(37,37,53,0.14)] sm:h-11 sm:w-11 lg:h-10 lg:w-10"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-0">
          <SettingRow icon={<SparkIcon />} label="Reduce motion" on />
          <SettingRow icon={<PlayIcon />} label="Auto play" on />
          <SettingRow icon={<PhotoIcon />} label="High quality photo" on={false} />
        </section>

        <section className="mt-4 flex flex-col gap-3 sm:mt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-4">
          <span className="text-[24px] font-medium text-[#8a8a93] sm:text-[31px] lg:text-[25px]">
            Reset to default
          </span>
          <div className="flex w-full gap-3 sm:w-auto sm:gap-4">
            <button className="h-[54px] flex-1 rounded-[16px] border border-[#dedee4] bg-[#fafafb] px-4 text-[20px] font-medium text-[#34343d] shadow-[0_1px_4px_rgba(30,30,44,0.08)] sm:h-[60px] sm:min-w-[170px] sm:flex-none sm:text-[28px] lg:h-[54px] lg:text-[22px]">
              Cancel
            </button>
            <button className="h-[54px] flex-1 rounded-[16px] border border-[#4a3fdf] bg-[linear-gradient(180deg,#5E4BEE_0%,#4334D6_100%)] px-4 text-[17px] font-semibold text-white shadow-[0_10px_18px_rgba(75,62,223,0.35),inset_0_1px_0_rgba(255,255,255,0.26)] sm:h-[60px] sm:min-w-[290px] sm:flex-none sm:text-[26px] lg:h-[54px] lg:min-w-[260px] lg:text-[21px]">
              Save Preferences
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

function ThemeCard({
  label,
  type,
  active = false,
}: {
  label: string;
  type: "auto" | "light" | "dark";
  active?: boolean;
}) {
  return (
    <button className="group flex w-full flex-col items-center gap-3">
      <div
        className={`relative h-[116px] w-full rounded-[16px] border bg-white p-2.5 shadow-[0_7px_14px_rgba(36,36,51,0.1)] transition-all sm:h-[132px] sm:p-3 lg:h-[112px] ${
          active
            ? "border-[3px] border-[#7365e8]"
            : "border-[#ececf1] group-hover:border-[#d8d8e4]"
        }`}
      >
        {type === "auto" && (
          <>
            <div className="absolute inset-y-0 left-0 w-[48%] rounded-l-[12px] bg-[#9d92ef]/45" />
            <div className="absolute inset-y-0 right-0 w-[52%] rounded-r-[12px] bg-[#f6f6fa]" />
          </>
        )}
        {type === "light" && (
          <div className="absolute inset-0 rounded-[12px] bg-[#fefefe]" />
        )}
        {type === "dark" && (
          <div className="absolute inset-0 rounded-[12px] bg-[linear-gradient(160deg,#2f2bd6_0%,#5a52ce_70%,#746dd2_100%)]" />
        )}

        <div className="relative z-10 flex h-full flex-col gap-1.5 rounded-[9px] border border-white/20 bg-white/55 px-2.5 py-2.5 backdrop-blur-[1px] sm:gap-2 sm:px-3 sm:py-3 lg:gap-1.5">
          <span className="h-1.5 w-2/3 rounded-full bg-black/20" />
          <span className="h-1.5 w-4/5 rounded-full bg-black/12" />
          <span className="mt-1 h-1.5 w-2/5 rounded-full bg-black/16" />
          <span className="h-1.5 w-3/4 rounded-full bg-black/12" />
          <span className="h-1.5 w-2/3 rounded-full bg-black/10" />
        </div>

        {active && (
          <span className="absolute bottom-2 left-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#6556e9] text-white shadow-[0_3px_7px_rgba(89,74,228,0.45)]">
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4.2 8.2L6.75 10.75L11.8 5.7"
                stroke="currentColor"
                strokeWidth="1.9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </div>
      <span
        className={`text-[22px] font-medium sm:text-[31px] lg:text-[24px] ${
          active ? "text-[#5c4fe4]" : "text-[#44444d]"
        }`}
      >
        {label}
      </span>
    </button>
  );
}

function SettingRow({
  icon,
  label,
  on,
}: {
  icon: ReactNode;
  label: string;
  on: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#ededf0] py-3.5 sm:py-4 lg:py-3">
      <div className="flex items-center gap-2.5 sm:gap-3">
        <span className="text-[#9898a0]">{icon}</span>
        <span className="text-[24px] font-semibold text-[#2a2a32] sm:text-[35px] lg:text-[28px]">
          {label}
        </span>
      </div>
      <ToggleSwitch on={on} />
    </div>
  );
}

function ToggleSwitch({ on }: { on: boolean }) {
  return (
    <span
      className={`relative h-[34px] w-[62px] rounded-full p-1 transition-colors sm:h-[42px] sm:w-[76px] lg:h-[36px] lg:w-[66px] ${
        on ? "bg-[#5748e7]" : "bg-[#dad5f0]"
      }`}
      role="presentation"
    >
      <span
        className={`absolute top-1 h-[26px] w-[26px] rounded-full bg-white shadow-[0_2px_8px_rgba(32,29,76,0.24)] transition-all sm:h-[34px] sm:w-[34px] lg:h-[28px] lg:w-[28px] ${
          on ? "left-[32px] sm:left-[38px] lg:left-[34px]" : "left-1"
        }`}
      />
    </span>
  );
}

function SparkIcon() {
  return (
    <svg
      className="h-5 w-5 sm:h-7 sm:w-7 lg:h-6 lg:w-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 3V5.5M12 18.5V21M4.8 7.1L6.5 8.8M17.5 15.8L19.2 17.5M3 12H5.5M18.5 12H21M4.8 16.9L6.5 15.2M17.5 8.2L19.2 6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      className="h-5 w-5 sm:h-7 sm:w-7 lg:h-6 lg:w-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8.8 6.7C8.8 5.48 10.15 4.74 11.19 5.42L18.38 10.15C19.33 10.77 19.33 12.17 18.38 12.79L11.19 17.52C10.15 18.2 8.8 17.46 8.8 16.24V6.7Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PhotoIcon() {
  return (
    <svg
      className="h-5 w-5 sm:h-7 sm:w-7 lg:h-6 lg:w-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="3.8"
        y="4.5"
        width="16.4"
        height="15"
        rx="4.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="9.2" cy="9.6" r="1.5" fill="currentColor" />
      <path
        d="M6.5 16.2L10.3 12.4C10.73 11.97 11.4 11.94 11.86 12.32L13.62 13.77C14.03 14.1 14.61 14.11 15.03 13.79L17.5 11.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
