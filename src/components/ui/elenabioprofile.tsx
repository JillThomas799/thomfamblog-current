import "./elenabioprofile.css";
import elenabiophoto6 from "/public/imagesresized/elenabiophoto6.jpg";
import Image from 'next/image'
import Link from 'next/link'

export default function ElenaBio() {
  return (
    <div>
      <div className="bg-[#191970] pb-6">
        <section className="Profession">
          <h2 className="font-bold">Profession:</h2>
          <h3 className="font-bold">Software Devops Engineer working for the Economist</h3>
        </section>

        <div className="flex flex-col sm:flex sm:flex-row">
          <section className="Likes">
            <h2 className="font-bold">Likes:</h2>
            <ul className="list-disc text-left pl-6">
            <li>History</li>
            <li>Writing</li>
            <li>Hiking</li>
            <li>Video Games</li>
            </ul>
          </section>

          <section className="photo">
            <figure>
              <Image id="Elena_profile_photo" className="mb-[10%] mt-[20%] sm:w-[75%] md:w-[70%] md:mr-[35%] md:ml-[15%] border-slate-500 border-[5px] border-solid rounded-xl transform transition hover:scale-150" src={elenabiophoto6} alt="" />
              <figcaption>
                <strong></strong>
              </figcaption>
            </figure>
            <article className="inline-block text-center text-white bg-[#4682b4] p-[20px]">
              {" "}
               Elena works for the Economist in their tech department. She initially
              studied chemistry before switching to computer science. A big 
              advocate for LGBTQ+ rights, including being involved in several pride groups
              in the past and having the opportunity to drive JLR's I-pace jaguar painted in the Pride colours through the city of London on the annual London Pride march.{" "}
            </article>
          </section>

          <section className="Dislikes">
            <h2 className="font-bold">Dislikes:</h2>
            <ul className="list-disc text-left pl-6">
            <li>Small dogs</li>
            <li>Loud places</li>
            <li>Excess drama</li>
             <li>Warm weather</li>
            </ul>
          </section>
        </div>

        <section className="surprisingFacts">
          <h2 className="font-bold">Surprising Facts:</h2>
          <ul className="list-disc text-left md:pl-12">
          <li>Elena was once on TV with 'Robbie' the robot, a project she and her colleague had worked on and developed at university.</li>
          <li>Elena is also a writer.{" "}           
          </li>
          </ul>
        </section>

        <section className="FavouriteBooks">
          <h2 className="font-bold">Favourite books:</h2>
          <ul className="list-disc text-left pl-6 md:pl-[45%]">
          <li>Discworld series by Terry Pratchett</li>
          </ul>
        </section>

        <section className="FavouriteMusic">
          <h2 className="font-bold">Favourite Music:</h2>
          <ul className="list-disc text-left pl-6 md:pl-[45%]">
          <li>Classic rock</li>
          <li>Indie Pop</li>
          <li>Orchestral</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
