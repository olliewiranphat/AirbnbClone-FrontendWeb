<div className="flex gap-9 text-[17px] text-[#6a6a6a] justify-center flex-1 pl-32">
          <button
            onClick={hdlClickHome}
            className={`${showEXP === false ? "text-[#222222] strong" : ""}`}
          >
            Homes
          </button>
          <button
            onClick={hdlClickEXP}
            className={`${showEXP === true ? "text-[#222222] strong" : ""}`}
          >
            Experiences
          </button>
        </div>
        {/* USER Nav */}
        {/* <div className="flex gap-5 text-[14px] flex-wrap items-center">
          <ReloadLink to="/host/homes">Airbnb your home</ReloadLink>
          <button>
            <Globe className="h-[18px]" />
          </button>
        </div> */}