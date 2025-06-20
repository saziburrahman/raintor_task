export default function Footer() {
  return (
    <div className="bg-black text-white p-8 rounded-3xl mx-auto relative">
      <div className="relative  p-8">
        {/* Header */}
        <div className="flex max-md:flex-col md:justify-between">
          <div className="flex justify-between items-start mb-16">
            <div className="text-lime-400 text-lg font-bold tracking-wider">
              DEVELOP.ME
            </div>
          </div>
          <div className="">
            <div className="text-2xl md:text-4xl font-bold mb-24">
              As you can
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="space-y-6">
                <div>
                  <h3 className="text-gray-400 text-sm font-medium mb-4">
                    Say hello
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-200 text-sm">
                      HELLO@DEVELOP.ME.COM
                    </p>
                    <p className="text-gray-200 text-sm">MAHBUBUL@ME.COM</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-gray-400 text-sm font-medium mb-4">
                    Call
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-200 text-sm">+784849 4951 00</p>
                    <p className="text-gray-200 text-sm">+8849 0100 911</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-4">Menu</h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block text-gray-200 text-sm hover:text-lime-400 transition-colors"
                  >
                    HOME
                  </a>
                  <a
                    href="#"
                    className="block text-gray-200 text-sm hover:text-lime-400 transition-colors"
                  >
                    ABOUT
                  </a>
                  <a
                    href="#"
                    className="block text-gray-200 text-sm hover:text-lime-400 transition-colors"
                  >
                    PORTFOLIO
                  </a>
                  <a
                    href="#"
                    className="block text-gray-200 text-sm hover:text-lime-400 transition-colors"
                  >
                    BLOG
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm font-medium mb-4">
                  Social
                </h3>
                <div className="space-y-3">
                  <a
                    href="#"
                    className="block text-gray-200 text-sm hover:text-lime-400 transition-colors"
                  >
                    TWITTER
                  </a>
                  <a
                    href="#"
                    className="block text-gray-200 text-sm hover:text-lime-400 transition-colors"
                  >
                    INSTAGRAM
                  </a>
                  <a
                    href="#"
                    className="block text-gray-200 text-sm hover:text-lime-400 transition-colors"
                  >
                    FACEBOOK
                  </a>
                  <a
                    href="#"
                    className="block text-gray-200 text-sm hover:text-lime-400 transition-colors"
                  >
                    BEHANCE
                  </a>
                  <a
                    href="#"
                    className="block text-gray-200 text-sm hover:text-lime-400 transition-colors"
                  >
                    DRIBBBLE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end pt-8 border-t border-gray-800">
          <div className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            BESNIK
          </div>

          <span className="text-gray-400 text-sm">© develop.me 2022</span>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-400 text-sm">
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                PRIVACY
              </a>
              <span>-</span>
              <a href="#" className="hover:text-white transition-colors">
                TERMS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
