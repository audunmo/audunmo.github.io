function Header() {
    return (<div>
        <p className="flex flex-col pt-[80px] justify-center items-center dark:text-white">
          <span>
            <span className="flex flex-col max-w-2xl">
              <span className="text-5xl font-bold">👋 Hi there, my name is Audun</span>
              <span className="text-lg pt-8">
              I'm a cloud engineer who is interested in appsec, and web hacking. Below you'll find some of my thoughts, CTF write-ups, and ways to connect
              </span>
            </span>
            <span className="grid grid-cols-2 grid-flow-col pt-8">
              <a className="text-center text-blue-500" rel="noopener noreferrer" href="https://twitter.com/audunmo">🐦 Twitter</a>
              <a className="text-center text-blue-500" rel="noopener noreferrer" href="https://github.com/audunmo">💻 GitHub</a>
            </span>
          </span>
        </p>
    </div>)
}

export default Header
