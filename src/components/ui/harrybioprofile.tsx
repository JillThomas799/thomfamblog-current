import "./harrybioprofile.css";
import harrybiophoto from "/public/imagesresized/harrybiophoto.jpg";
import Image from 'next/image'
import Link from 'next/link'

export default function HarryBio() {
  return (
    <div>
      <div className="bg-[#191970] pb-6">
        <section className="Profession">
          <h2 className="font-bold">Profession:</h2>
          <h3 className="font-bold">
            Digital and Technology Professional Westmoreland and Furness District Council
          </h3>
        </section>

        <div className="flex flex-col sm:flex sm:flex-row">
          <section className="Likes">
            <h2 className="font-bold">Likes:</h2>
            <ul className="list-disc text-left pl-6">
            <li>Cats</li>
            <li>Seagulls</li>
            <li>Bratwurst and chocolate-based desserts</li>
            <li>Computer games</li>
            </ul>
          </section>

          <section className="photo">
            <figure>
              <Image id="Harry_profile_photo" className="mb-[10%] mt-[20%] sm:w-[75%] md:w-[70%] md:mr-[35%] md:ml-[15%] border-slate-500 border-[5px] border-solid rounded-xl transform transition hover:scale-150" src={harrybiophoto} alt="" />
              <figcaption>
                <strong></strong>
              </figcaption>
            </figure>
            <article className="inline-block text-center text-white bg-[#4682b4] p-[20px]">
              {" "}
              Harry is a graduate in chemistry from Lancaster University and holds a doctorate in computational chemistry from Cardiff University. More recently he has returned home to Cumbria and 
              has been appointed in a role as a Digital and Technology Professional with Westmoreland and District Council.
              He is particularly interested in cybersecurity, data science and data analysis.
              {/* Harry grew up in Lancashire, where he attended school until aged
              18 years. After obtaining A*AA in Maths, Further Maths and
              Chemistry A levels respectively, he obtained an unconditional
              place to study for a Masters degree in Chemistry for 4 years.
              After obtaining the prize for best-performing Master's student in
              Chemistry he successfully obtained a place to study for an
              industry-sponsored PhD in Computational Chemistry at Cardiff
              University. */}
            </article>
          </section>
          <section className="Dislikes">
            <h2 className="font-bold">Dislikes:</h2>
            <ul className="list-disc text-left pl-6">
            <li>Cows</li>
            <li>Barn owls</li>
            <li>Salad</li>
            </ul>
          </section>
        </div>

        <section className="surprisingFacts">
          <h2 className="font-bold">Surprising Facts:</h2>
          <ul className="list-disc text-left pl-6">
          <li>
            Harry has won more awards and prizes than any one else in the family
          </li>
          <li>
            Harry lived and studied in Ulm, Baden Württemberg for 3 months in
            2018 when he was awarded a DAAD scientific research internship in
            catalysis{" "}
          </li>
          </ul>
        </section>

        <section className="FavouriteBooks">
          <h2 className="font-bold">Favourite books:</h2>
          <ul className="list-disc text-left pl-6">
          <li>Warrior Cats novel series</li>
          <li>Stephen King, The Shining </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
