import user1 from '../../images/user1.png';
import user2 from '../../images/User2.png';
import user3 from '../../images/user3.png';
import worker1 from '../../images/worker1.png';
import worker2 from '../../images/worker2.png';
import worker3 from '../../images/worker3.png';

const HowItWorks = () => {
    return (
        <div className="bg-[#D8F0FE] py-20">
            <h1 className="bg-[#028DDB] font-[cabinet-grotesk] font-bold text-4xl leading-[49.6px] text-[#F4FBFF] max-w-[25%] mx-40 -mt-36 text-center py-10 px-4 rounded-[30px]">
                How It Works
            </h1>

            <section className="mt-40 grid grid-cols-[0.5fr_1.5fr]">
                <div>
                    <h1 className="text-4xl font-[cabinet-grotesk] font-extrabold leading-[49.6px] text-center grid place-items-center h-full">
                        USERS:
                    </h1>
                </div>
                <article className="flex justify-between items-center bg-[#006299] rounded-[20px] overflow-x-scroll">
                    <div className="flex-1 text-center relative py-7">
                        <img
                            src={user1}
                            alt="logo"
                            className="block w-[20%] h-auto bg-[#0063FF] rounded-[15px] p-3 mx-[15%] my-[5%]"
                        />
                        <p className="font-arial-narrow font-light text-xl leading-[32.4px] text-[#D9EFFC] text-justify px-14">
                            Search for any domestic service, and We will find
                            trusted providers close to your location.
                        </p>
                        <div className="absolute right-0 top-[35px] h-[80%] w-[5px] bg-white"></div>
                    </div>
                    <div className="flex-1 text-center relative py-7">
                        <img
                            src={user2}
                            alt="logo"
                            className="block w-[20%] h-auto bg-[#0063FF] rounded-[15px] p-3 mx-[15%] my-[5%]"
                        />
                        <p className="font-arial-narrow font-light text-xl leading-[32.4px] text-[#D9EFFC] text-justify px-14">
                            You pick one of the listed providers, take a moment
                            to view their profile to be sure their rate suits
                            your budget and book for the service.
                        </p>
                        <div className="absolute right-0 top-[35px] h-[80%] w-[5px] bg-white"></div>
                    </div>
                    <div className="flex-1 text-center py-7">
                        <img
                            src={user3}
                            alt="logo"
                            className="block w-[20%] h-auto bg-[#0063FF] rounded-[15px] p-3 mx-[15%] my-[5%]"
                        />
                        <p className="font-arial-narrow font-light text-xl leading-[32.4px] text-[#D9EFFC] text-justify px-14">
                            Your assigned service provider arrives at your
                            location, and gets your job done!
                        </p>
                    </div>
                </article>
            </section>

            <section className="mt-40 grid grid-cols-[0.5fr_1.5fr]">
                <div>
                    <h1 className="text-4xl font-[cabinet-grotesk] font-extrabold leading-[49.6px] text-center grid place-items-center h-full">
                        WORKERS:
                    </h1>
                </div>
                <article className="flex justify-between items-center bg-[#006299] rounded-[20px] overflow-x-scroll">
                    <div className="flex-1 text-center relative py-7">
                        <img
                            src={worker1}
                            alt="logo"
                            className="block w-[20%] h-auto bg-[#0063FF] rounded-[15px] p-3 mx-[15%] my-[5%]"
                        />
                        <p className="font-arial-narrow font-light text-xl leading-[32.4px] text-[#D9EFFC] text-justify px-14">
                            Sign Up on ChoreAid as a provider, and submit all
                            required information and documents.
                        </p>
                        <div className="absolute right-0 top-[35px] h-[80%] w-[5px] bg-white"></div>
                    </div>
                    <div className="flex-1 text-center relative py-7">
                        <img
                            src={worker2}
                            alt="logo"
                            className="block w-[20%] h-auto bg-[#0063FF] rounded-[15px] p-3 mx-[15%] my-[5%]"
                        />
                        <p className="font-arial-narrow font-light text-xl leading-[32.4px] text-[#D9EFFC] text-justify px-14">
                            ChoreAid would list you as a provider for the
                            service you offer and users around you can request
                            your service.
                        </p>
                        <div className="absolute right-0 top-[35px] h-[80%] w-[5px] bg-white"></div>
                    </div>
                    <div className="flex-1 text-center py-7">
                        <img
                            src={worker3}
                            alt="logo"
                            className="block w-[20%] h-auto bg-[#0063FF] rounded-[15px] p-3 mx-[15%] my-[5%]"
                        />
                        <p className="font-arial-narrow font-light text-xl leading-[32.4px] text-[#D9EFFC] text-justify px-14">
                            Accept users' requests and proceed with completing
                            their jobs and getting paid!
                        </p>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default HowItWorks;
