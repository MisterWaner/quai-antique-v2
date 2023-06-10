import { memberKitchenData, memberServiceData } from "./memberData";

export default function Equipe() {
    return (
        <main className="w-full flex-1 h-full md:mt-[98px] lg:container lg:mx-auto">
            <h1 className="text-center py-4 text-[50px] font-bold">
                L&apos;équipe
            </h1>
            <section className="container mx-auto p-6 lg:px-0">
                <h2 className="text-2xl font-bold underline">La Cuisine</h2>
                <ul className="mt-6 md:flex md:flex-col">
                    {memberKitchenData.map((member, index) => {
                        return (
                            <li className="mt-6 border border-bwn-color p-4 rounded-md md:flex md:items-center lg:items-start" key={member.id}>
                                <div className="w-2/3 mx-auto md:w-[700px] lg:w-[500px]">
                                    <img className="rounded-2xl" src={`images/team-member${index + 1}.jpg`} alt="" />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-center font-pynion text-2xl font-bold lg:text-3xl">
                                        {member.name}
                                    </h3>
                                    <p className="w-2/3 mx-auto my-4">
                                        {member.description}
                                    </p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
            <section className="container mx-auto p-6 lg:px-0">
                <h2 className="text-2xl font-bold underline">La Service</h2>
                <ul className="mt-6">
                    {memberServiceData.map((member, index) => {
                        return (
                            <li className="mt-6 border border-bwn-color p-4 rounded-md md:flex md:items-center lg:items-start" key={member.id}>
                                <div className="w-2/3 mx-auto md:w-[700px] lg:w-[500px]">
                                    <img className="rounded-2xl" src={`images/team-member${index + 3}.jpg`} alt="" />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-center font-pynion text-2xl font-bold lg:text-3xl">
                                        {member.name}
                                    </h3>
                                    <p className="w-2/3 mx-auto my-4">
                                        {member.description}
                                    </p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </main>
    );
}
