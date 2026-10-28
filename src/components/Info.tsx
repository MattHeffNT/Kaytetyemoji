import './styles/Info.css';
import { lazy, Suspense, useState } from 'react';
import { IonContent } from '@ionic/react';

// defined outside the component so it doesn't remount on every render
const Slides = lazy(() => import('./Slides'));

const Info: React.FC<any> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IonContent>
      <div className='info-container'>
        <h1> Emoji-we // About </h1>
        <p>
          Kaytetyemoji represents life, culture and environment on Kaytetye
          Country, around 300 kilometres north of Mparntwe (Alice Springs) in
          Central Australia. In early 2022, a group of Kaytetye speakers got
          together to begin to develop Kaytetyemoji. After the success of the
          Indigemoji app, additional resources became available to invest in
          innovative language projects. The Arrernte Indigemoji team approached
          linguist Dr Myfany Turpin to propose assisting the Kaytetye community
          to develop a project, as they knew Kaytetye was considered a highly
          endangered Australian language, with only 109 speakers listed in the
          2021 census, which was down nine per cent since the previous census.
        </p>
        <p>
          Over many months, Tommy Jangala “Walkabout”, Phillip Janima, Valentine
          Shaw, Kathleen Rambler and others went through a process of
          translating the relevant Indigemojis from Arrernte to Kaytetye as well
          as designing 44 new emojis for plants, animals and other important
          parts of Kaytetye life and culture, with the help of graphic
          designers. We made recordings of the word to match each emoji, along
          with example phrases which you can find on this app.
        </p>
        <p>
          The main emoji representing our set is ‘artnke’ which means
          flat-topped hills, a significant feature of Kaytetye country; and the
          name of the hills that you see when you come into Barrow Creek. Other
          neighbouring language groups also recognise artnke as a feature of
          Kaytetye country.
        </p>
        <p>
          This is an app to encourage young people to learn Kaytetye. The
          digital generation never go anywhere without their phones and now they
          can share Kaytetye!
        </p>
        <p>App background design: Kathleen Rambler </p>
        {/* onClick launch modal/slide component? */}
        <p
          onClick={() => {
            setIsOpen(true);
          }}
          id='slide-link'>
          View the welcome screens
        </p>
        <p> Read more about the emojis on the </p>
        <a href='https://www.indigemoji.com.au/'>Indigemoji website.</a>
        <br />
        <p>
          <a href='https://www.indigemoji.com.au/terms-conditions'>
            View terms and conditions of use.
          </a>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <Slides
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
          />
        </Suspense>
      </div>
    </IonContent>
  );
};
export default Info;
