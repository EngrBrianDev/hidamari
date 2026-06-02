import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/app/components/shared/SiteFooter";
import { SiteHeader } from "@/app/components/shared/SiteHeader";

const assetBase = "/stitch_hidamari_inspired_portfolio";

const images = {
  dinner:
    `${assetBase}/image_from_https_hidamari_restaurant.com_images_dinner_btn.png/screen.png`,
  drink:
    `${assetBase}/image_from_https_hidamari_restaurant.com_images_drink_btn.png/screen.png`,
  interior:
    `${assetBase}/image_from_https_hidamari_restaurant.com_images_photo003.png/screen.png`,
  table:
    `${assetBase}/image_from_https_hidamari_restaurant.com_images_photo004.png/screen.png`,
  logo:
    `${assetBase}/image_from_https_hidamari_restaurant.com_images_toplogo.png/screen.png`,
};

const drinkTags = ["Sapporo", "Kirin", "Draft"];

export function DinnerPage() {
  return (
    <>
      <SiteHeader active="dinner" />
      <aside className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 rounded-l-xl bg-surface-container-low p-4 shadow-[4px_20px_20px_rgb(166_124_65_/_8%)] lg:flex">
        <div className="mb-2 flex flex-col items-center">
          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-paper-white">
            <span className="material-symbols-outlined">restaurant</span>
          </div>
          <p className="font-label-md text-[10px] uppercase tracking-widest text-primary">
            Reservations
          </p>
        </div>
        <Link
          href="/access"
          className="flex flex-col items-center gap-1 rounded-lg bg-secondary-container/30 p-3 text-secondary transition-transform hover:-translate-x-1"
        >
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-label-md text-[10px]">Book a Table</span>
        </Link>
        <Link
          href="/access"
          className="flex flex-col items-center gap-1 rounded-lg p-3 text-on-surface-variant transition-transform hover:-translate-x-1 hover:bg-primary/5"
        >
          <span className="material-symbols-outlined">takeout_dining</span>
          <span className="font-label-md text-[10px]">Bento Orders</span>
        </Link>
      </aside>

      <main className="bg-background pt-20">
        <section className="relative mx-auto max-w-7xl overflow-hidden px-margin-mobile py-section-gap md:px-margin-desktop">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="z-10 text-center md:text-left">
              <span className="mb-4 inline-block rounded-full bg-tertiary/10 px-3 py-1 font-label-md text-caption uppercase tracking-[1px] text-tertiary">
                Evening Experience
              </span>
              <h1 className="mb-6 font-headline-xl text-headline-xl text-primary md:text-[48px] md:leading-[56px]">
                Dinner at Hidamari
              </h1>
              <p className="mx-auto mb-8 max-w-lg font-body-lg text-body-lg text-on-surface-variant md:mx-0">
                Experience a warm, cozy evening atmosphere where time slows
                down. Indulge in artisanal Japanese dishes under the soft glow
                of dusk.
              </p>
              <div className="mb-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">schedule</span>
                  <span className="font-body-md text-body-md">
                    17:00 - 24:00 Daily
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                <Link
                  href="/access"
                  className="rounded-xl bg-primary px-6 py-3 font-label-md text-label-md text-paper-white transition-all hover:opacity-90 active:scale-95"
                >
                  Book a Table
                </Link>
                <Link
                  href="#drinks"
                  className="rounded-xl border border-primary/30 px-6 py-3 font-label-md text-label-md text-primary transition-all hover:bg-primary/5"
                >
                  View Drinks
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <div className="group relative h-80 overflow-hidden rounded-b-xl rounded-t-[200px] sunlit-shadow transition-transform duration-500 hover:-translate-y-2">
                  <Image
                    src={images.dinner}
                    alt="Dinner dishes at Hidamari"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    fetchPriority="high"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="group relative h-96 overflow-hidden rounded-b-xl rounded-t-[200px] sunlit-shadow transition-transform duration-500 hover:-translate-y-2">
                  <Image
                    src={images.drink}
                    alt="Japanese drinks and bar selection"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="drinks"
          className="bg-surface-container-low py-section-gap scroll-mt-24"
        >
          <div className="mx-auto max-w-7xl px-margin-mobile md:px-margin-desktop">
            <div className="mb-16 text-center">
              <h2 className="mb-4 font-headline-xl text-headline-xl text-primary">
                Extensive Drink Selection
              </h2>
              <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
                From Japanese draft beers to curated sake, our beverage menu is
                designed to complement your evening meal perfectly.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:auto-rows-[280px] md:grid-cols-12">
              <div className="group flex flex-col overflow-hidden rounded-xl bg-paper-white sunlit-shadow transition-all duration-300 md:col-span-8 md:flex-row">
                <div className="relative h-full min-h-[220px] w-full overflow-hidden md:w-1/2">
                  <Image
                    src={images.drink}
                    alt="Japanese draft beer and bar drinks"
                    fill
                    sizes="(max-width: 768px) 100vw, 34vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex w-full flex-col justify-center p-8 md:w-1/2">
                  <h3 className="mb-4 font-headline-lg text-headline-lg text-primary">
                    Japanese Draft
                  </h3>
                  <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                    Experience the crisp taste of Sapporo Premium, Kuro, and
                    Kirin Ichiban Shibori, poured to perfection.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {drinkTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-secondary-container/20 px-2 py-1 font-label-md text-[10px] uppercase tracking-wider text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-end rounded-xl bg-primary p-8 text-paper-white sunlit-shadow transition-colors duration-300 hover:bg-primary-container md:col-span-4">
                <span
                  className="material-symbols-outlined mb-6 text-4xl opacity-80"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  liquor
                </span>
                <h3 className="mb-2 font-headline-lg text-headline-lg">
                  Sake &amp; Shochu
                </h3>
                <p className="font-body-md text-body-md opacity-90">
                  A curated collection of regional favorites from across Japan,
                  available by the glass or bottle.
                </p>
              </div>

              <div className="group flex flex-col rounded-xl bg-paper-white p-8 sunlit-shadow transition-all duration-300 md:col-span-4">
                <div className="mb-auto">
                  <h3 className="mb-2 font-headline-lg text-headline-lg text-primary">
                    Whiskey
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Suntory Hibiki, Yamazaki, and more. Bottle keeping services
                    available for regular guests.
                  </p>
                </div>
                <Link
                  href="/access"
                  className="mt-8 flex items-center justify-between font-label-md text-label-md text-primary"
                >
                  <span>Explore Premium Labels</span>
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">
                    arrow_forward
                  </span>
                </Link>
              </div>

              <div className="group relative min-h-[280px] overflow-hidden rounded-xl sunlit-shadow transition-all duration-300 md:col-span-8">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-ink-black/80 to-transparent" />
                <Image
                  src={images.interior}
                  alt="Cozy Hidamari restaurant interior at night"
                  fill
                  sizes="(max-width: 768px) 100vw, 67vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 z-20 p-8 text-paper-white">
                  <h3 className="mb-2 font-headline-lg text-headline-lg">
                    A Space for 65 Guests
                  </h3>
                  <p className="max-w-md font-body-md text-body-md opacity-90">
                    Private rooms for 8-18 guests and a lively bar counter for
                    solo diners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-margin-mobile py-section-gap md:px-margin-desktop">
          <div className="flex flex-col gap-section-gap md:flex-row">
            <div className="w-full md:w-1/2">
              <h2 className="mb-8 font-headline-xl text-headline-xl text-primary">
                Visit Us
              </h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                  <div>
                    <h4 className="mb-2 font-label-md text-label-md uppercase tracking-wider text-primary">
                      Location
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      4th Floor, Penthouse, Creekside Building, Amorsolo corner
                      V.A. Rufino Sts., Legaspi Village, Makati City
                    </p>
                    <p className="mt-2 font-caption text-caption italic text-primary">
                      3-minute walk from Little Tokyo and Cinema Square
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    call
                  </span>
                  <div>
                    <h4 className="mb-2 font-label-md text-label-md uppercase tracking-wider text-primary">
                      Phone
                    </h4>
                    <p className="font-headline-lg text-headline-lg text-primary">
                      02-8659-6120
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    credit_card
                  </span>
                  <div>
                    <h4 className="mb-2 font-label-md text-label-md uppercase tracking-wider text-primary">
                      Payments
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      VISA, MASTER, AMEX, JCB
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] w-full overflow-hidden rounded-xl sunlit-shadow md:w-1/2">
              <div className="relative flex h-full w-full items-center justify-center bg-surface-container">
                <Image
                  src={images.table}
                  alt="Hidamari dining room"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-30 grayscale"
                />
                <div className="z-10 max-w-xs rounded-xl bg-paper-white/90 p-8 text-center backdrop-blur sunlit-shadow">
                  <Image
                    src={images.logo}
                    alt="Hidamari logo"
                    width={56}
                    height={56}
                    className="mx-auto mb-3 rounded-full"
                  />
                  <h3 className="mb-1 font-label-md text-label-md text-primary">
                    Hidamari Japanese Restaurant
                  </h3>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Creekside Building Penthouse
                  </p>
                  <Link
                    href="/access"
                    className="mt-4 inline-block border-b border-primary pb-1 font-label-md text-label-md text-primary transition-opacity hover:opacity-70"
                  >
                    Open in Maps
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
