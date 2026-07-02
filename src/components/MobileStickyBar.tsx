export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Subtle top fade so it doesn't hard-cut over content */}
      <div
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(246,242,234,0.95))',
          height: '20px',
        }}
      />
      <div className="border-t border-sand bg-cream/95 px-5 pb-6 pt-2 backdrop-blur-sm">
        <a
          href="#booking"
          className="flex w-full min-h-[52px] items-center justify-center rounded-lg bg-sage px-6 py-4 font-body text-base font-medium text-cream transition-colors hover:bg-sage-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
        >
          Book your free consultation
        </a>
      </div>
    </div>
  )
}
