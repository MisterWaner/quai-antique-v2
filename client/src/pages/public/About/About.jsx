export default function About() {
    return (
        <main className="w-full flex-1 h-full md:mt-[98px] lg:container lg:mx-auto">
            <h1 className="text-center py-4 text-[50px] font-bold">À Propos</h1>
            <section className="p-5 lg:px-0">
                <h2 className="text-2xl font-bold underline">Le projet</h2>
                <p className="mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, hic, natus molestiae, tenetur cupiditate sed
                    explicabo beatae suscipit perferendis dolore quas vero.
                    Deserunt, odit? Quaerat recusandae reiciendis nulla sint
                    dolorum eos corporis illum, adipisci eligendi deserunt
                    voluptatum. Magni, omnis sapiente. Doloremque, dolor neque
                    fuga quo fugiat ducimus maxime consequatur corrupti
                    voluptates, aliquam quasi cum, nemo magni qui temporibus
                    itaque nulla incidunt earum in corporis. Consequatur
                    corporis reiciendis, harum at tempora voluptatibus nam error
                    dolore, veniam delectus eius aliquid. Voluptatibus quisquam
                    nesciunt aliquid laboriosam numquam aliquam. Aspernatur vero
                    quidem, fuga accusamus cumque magnam itaque quisquam iste
                    perspiciatis molestias dignissimos incidunt quae quia
                    doloremque magni quas iusto temporibus natus exercitationem
                    asperiores laborum delectus. Explicabo officia accusantium
                    aut nulla aliquid, ratione repellendus cumque! A harum
                    voluptas hic, delectus est, recusandae mollitia id
                    temporibus inventore ducimus nemo eum aperiam vitae.
                    Perspiciatis quia ea ut architecto, quas accusamus modi
                    quaerat sed laborum praesentium vitae laboriosam tempora
                    rerum corrupti at porro. Corrupti, nostrum magnam! Sed,
                    quasi! Reiciendis, labore, nostrum aut exercitationem
                    laudantium beatae facere, repellendus eaque non dolores
                    expedita aliquid porro mollitia cum optio a. Nemo
                    voluptatibus quis soluta amet nam, libero deserunt
                    consequatur quod veritatis. Neque voluptatem, nulla est
                    quasi quis ipsam adipisci quos earum veritatis voluptatibus
                    distinctio eum laboriosam at voluptas amet, in tenetur vel
                    error veniam perspiciatis. Quibusdam, similique incidunt
                    ipsa, unde dolore necessitatibus a officiis reprehenderit
                    corporis sit temporibus, ab corrupti quasi sed debitis!
                    Veniam amet id vitae voluptatem quidem rerum iusto illo et
                    error. Nihil, quod tempora cumque mollitia perspiciatis
                    consequatur.
                </p>
            </section>
            <section className="p-5 lg:px-0">
                <h2 className="text-2xl font-bold underline">
                    Nos horaires d&apos;ouverture
                </h2>
                <table className="my-12 mx-auto text-center border border-black w-full md:w-[500px] h-[300px] border-collapse text-xl">
                    <thead className="bg-bwn-color text-white text-shadow uppercase">
                        <tr>
                            <th scope="col">Jour</th>
                            <th scope="col">Midi</th>
                            <th scope="col">Soir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Lundi</th>
                            <td className="p-2">Fermé</td>
                            <td className="p-2">Fermé</td>
                        </tr>
                        <tr>
                            <th scope="row">Mardi</th>
                            <td className="p-2">Fermé</td>
                            <td className="p-2">19h - 22h</td>
                        </tr>
                        <tr>
                            <th scope="row">Mercredi</th>
                            <td className="p-2">12h - 14h30</td>
                            <td className="p-2">19h - 22h</td>
                        </tr>
                        <tr>
                            <th scope="row">Jeudi</th>
                            <td className="p-2">12h - 14h30</td>
                            <td className="p-2">19h - 22h</td>
                        </tr>
                        <tr>
                            <th scope="row">Vendredi</th>
                            <td className="p-2">12h - 14h30</td>
                            <td className="p-2">19h - 22h</td>
                        </tr>
                        <tr>
                            <th scope="row">Samedi</th>
                            <td className="p-2">12h - 14h30</td>
                            <td className="p-2">19h - 23h</td>
                        </tr>
                        <tr>
                            <th scope="row">Dimanche</th>
                            <td className="p-2">11h - 15h</td>
                            <td className="p-2">Fermé</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </main>
    );
}
