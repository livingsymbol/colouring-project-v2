import RichTextRenderer from "../RichTextRenderer";
import Paragraph from '../Paragraph';
import { useLocale } from "../../context/LocaleContext";

export default function GalleryTab3() {
    const { locale } = useLocale();

    return <div className="w-full">
        {/* <RichTextRenderer content={galleryTab3Content} /> */}
        {locale === "en" ?
            <>
                <img
                    src="/images/gt3.1.png"
                    alt="Example"
                    className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                />
                <img
                    src="/images/gt3.2.png"
                    alt="Example"
                    className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                />
                <br />
                <Paragraph>
                    <i>"Flowers speak to us when we know how to listen to them,"</i> the Mother said. <i>"It is a subtle and fragrant language."</i> The Mother identified significances of almost nine hundred flowers.
                    <br />
                    <br />
                    Mother, each flower has its own significance, doesn't it?
                    <br />
                    <br />
                    <i>
                        “Not as we understand it mentally. There is a mental projection when one gives a precise significance to a flower. ... A flower does not have the equivalent of a mental consciousness.  ... It is rather like the movement of a little baby, neither a sensation nor a feeling, but something of both; it is a spontaneous movement, a very special vibration. Well, if one is in contact with this vibration, if one feels it, one receives an impression which may be translated by a thought. This is how I give a significance to flowers and plants. There is a kind of identification with the vibration, a perception of the quality it represents, and gradually through a kind of approximation (sometimes it comes suddenly, occasionally it takes time) there is a convergence of these vibrations, which are of a vital-emotional order, and the vibration of mental thought, and if there is sufficient accord one has a direct perception of what the plant may signify.”
                    </i>
                </Paragraph>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Courage</h2>
                    <h3>Flower associated with courage: Calotropis gigantea</h3>
                    <br />
                    <img
                        src="/images/gt3.3.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                    />
                    <img
                        src="/images/gt3.4.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                    />
                    <br />
                    <Paragraph className="italic">
                        “Courage is the total absence of fear in any form.”
                        <br />
                        <br />
                        “... fear is an impurity, one of the greatest impurities, one of those which
                        come most directly from the anti-divine forces which want to destroy the
                        divine action on earth; and the first duty of those who really want to do
                        yoga is to eliminate from their consciousness, with all the might, all the
                        sincerity, all the endurance of which they are capable, even the shadow
                        of a fear. To walk on the path, one must be dauntless, and never indulge
                        in that petty, small, feeble, nasty shrinking back upon oneself, which is fear.
                        An indomitable courage, a perfect sincerity and a sincere self-giving, so that one does not calculate or bargain, does not give with the idea of receiving, does not trust with the idea of being protected, does not have faith which asks for proofs – it is this that is indispensable in order to walk on the path, and it is this alone which can truly shelter you from all danger.”
                        <br />
                        <br />
                        “Courage is to be able to face everything in life without the slightest emotion in any part of the being and with a constant awareness of the Divine Presence.”
                        <br />
                        <br />
                        “Progress may be slow, relapses may be frequent, but if a courageous will is maintained, one is sure to triumph one day and see all difficulties melt and vanish before the radiance of the truth-consciousness.”
                        <br />
                        <br />
                        “Whosoever is courageous can give courage to others, just as the flame of one candle can light another.”
                        <br />
                        <br />
                        “When we trust in the Divine Grace, we get an unfailing courage.”
                        “Never mistake rashness for courage, nor indifference for patience.”
                        “A noblest courage is to recognize one’s faults.”
                        “There is no greater courage than to be always truthful.”
                        “Have the courage to be completely frank with the Divine.”
                        <br />
                        <br />
                        “I remember that once we spoke of courage as one of the perfections... But this courage means having a taste for the supreme
                        adventure. And this taste for supreme adventure ... takes hold of you completely and flings you, without calculation and without
                        reserve and without a possibility of withdrawal, into the great adventure of the divine discovery, the great adventure of the divine meeting, the yet greater adventure of the divine Realisation; you throw yourself into the adventure without looking back and without asking for a single minute, “What’s going to happen?” For if you ask what is going to happen, you never start, you always remain stuck there, rooted to the spot, afraid to lose something, to lose your balance.”
                        <br />
                        <br />
                    </Paragraph>
                    <Paragraph className="text-right italic">
                        - The Mother
                    </Paragraph>
                </>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Progress</h2>
                    <h3>Flower associated with Progress: Catharanthus roseus
                    </h3>
                    <br />
                    <img
                        src="/images/gt3.5.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                    />
                    <img
                        src="/images/gt3.6.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                    />
                    <br />
                    <Paragraph className="italic">
                        “The first condition of inner progress is to recognize whatever is or has
                        been a wrong movement in any part of  our nature – wrong idea, wrong
                        feeling, wrong speech, wrong action – and by wrong is meant what
                        departs from the truth, from the higher Consciousness and the higher Self,
                        from the way of the Divine. Once recognized, it is offered to the Divine
                        for the Light and Grace to descend and substitute for it the right movement
                        of the true Consciousness.”
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - Sri Aurobindo
                    </Paragraph>
                    <br />
                    <Paragraph className="italic">
                        “Above all, it is the will for progress and self-purification which lights the fire. The will for progress. Those who have a strong will, when they turn it towards spiritual progress and  purification, automatically light the fire within themselves.”
                        <br />
                        <br />
                        “The purpose of earthly life is progress. If you stop progressing you will die. Every moment that you spend without progressing is one step closer to your grave.”
                        <br />
                        <br />
                        “From the moment you are satisfied and aspire no longer, you begin to die. Life is movement, life is effort; it is marching forward,
                        climbing towards future revelations and realisations. Nothing is more dangerous than wanting to rest.”
                        <br />
                        <br />
                        “Do not think of what you have been, think only of what you want to be and you are sure to progress.”
                        <br />
                        <br />
                        “Try to enjoy doing everything you do. When you are interested in what you do, you enjoy doing it. To be interested in what you do, you must try to do it better and better.”
                        <br />
                        <br />
                        “One has always something to learn and a progress to make, and in each circumstance we can find the occasion of learning the lesson and making the progress.
                    </Paragraph>
                    <Paragraph className="text-right italic">
                        - The Mother
                    </Paragraph>
                </>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Receptivity</h2>
                    <h3>Flower associated with Receptivity: Gladiolus xhortulanus
                    </h3>
                    <br />
                    <img
                        src="/images/gt3.7.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                    />
                    <img
                        src="/images/gt3.8.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                    />
                    <br />
                    <Paragraph className="italic">
                        “This means… to receive the Divine Force… and allow it to work, guiding
                        one’s sight, will and action. There must be a complete and never-failing
                        assent, a willingness to let the Divine Power do with us whatever is
                        needed for the work that has to be done. Receptivity is the capacity of
                        admitting and retaining the Divine Workings.”
                        <br />
                        <br />
                        “My love is always with you; if then you do not feel it, it is because you
                        are not capable of receiving it. It is your receptivity that is lacking and
                        should be increased; for this you must open yourself, and one opens oneself
                        only if one gives oneself. Surely you are trying more or less consciously to draw
                        the forces and the divine love towards you. The method is bad. Give yourself without calculating and without expecting anything in return, and then you will become capable of receiving.”
                        <br />
                        <br />
                        “It is with the widening of the consciousness and the one-pointedness of the aspiration that the receptivity increases.”<br />
                        “Flowers are very receptive and they are happy when they are loved.” <br />“Conscious of the Divine Will and surrendered to it.”

                    </Paragraph>
                    <br />
                    <br />
                    <Paragraph>
                        Q: Mother, on what does receptivity depend?
                    </Paragraph>
                    <br />
                    <Paragraph className="italic">
                        “It depends first of all upon sincerity - on whether one really wants to receive - and then... yes, I believe the principal factors are sincerity and humility. There is nothing that closes you up more than vanity. When you are self-satisfied, you have that kind of vanity of not wanting to admit that you lack something, that you make mistakes, that you are incomplete, that you are imperfect, that you are... There is something in the nature, you know, which grows stiff in this way, which does not want to admit - it is this
                        which prevents you from receiving. You have, however, only to try it out and get the experience. If, by an effort of will you manage to make even a very tiny part of the being admit that “Ah, well, yes, I am mistaken, I should not be like that, and I should not do that and should not feel that, yes, it is a mistake”, if you manage to make it admit this, at first, as I said just now, it begins by hurting you very much, but when you hold on firmly, until this is admitted, immediately it is open - it is open and strangely a flood of light enters, and then you feel so glad afterwards, so happy that you ask yourself, “Why, was I foolish enough to resist so long?”
                    </Paragraph>
                    <Paragraph className="text-right italic">
                        - The Mother
                    </Paragraph>
                    <br />
                    <Paragraph className="italic">
                        “Receptivity - the power to receive the Divine Force and to feel its presence and the presence of the Mother in it and allow it to work, guiding one's sight and will and action.”
                        <br />
                        <br />
                        “There must be a complete and never failing assent, a courageous willingness to let the Divine Power do with us whatever is needed for the work that has to be done.”

                    </Paragraph>
                    <Paragraph className="text-right italic">
                        - Sri Aurobindo
                    </Paragraph>
                </>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Aspiration</h2>
                    <h3>Flower associated with Aspiration: Nyctanthes arbor-tristis
                    </h3>
                    <br />
                    <img
                        src="/images/gt3.9.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                    />
                    <img
                        src="/images/gt3.10.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                    />
                    <br />
                    <Paragraph className="italic">
                        “This taste for supreme adventure is aspiration – an aspiration which takes
                        hold of you completely and flings you, without calculation and without
                        reserve and without a possibility of withdrawal, into the great adventure
                        of the divine discovery, the great adventure of the divine meeting, the yet
                        greater adventure of the divine Realisation.”
                        <br />
                        <br />

                        “One must have a fixed and unfailing aspiration, vigilant and constant
                        – an aspiration of the entire being – an aspiration that takes hold of you
                        completely, an aspiration to unite with the Divine… to give oneself totally to
                        the Divine, not to live outside the Divine Consciousness, so that the Divine may be all in all.“
                        <br />
                        <br />

                        “Beyond words, above thoughts the flame of an intense aspiration must always burn, steady and bright.”
                        <br />
                        <br />

                        “Aspiration is one of the marvelous gifts of grace given to human nature.”
                        <br />
                        “We must aspire with all our being for the manifestation to come soon and complete.”
                        <br />
                        “It is to the sincerity of your aspiration that the Love answers spontaneously.”
                        <br />
                        <br />

                        “If you are in a state of conscious aspiration and very sincere, well, everything around you will be arranged in order to help in your aspiration, whether directly or indirectly, that is, either to make you progress, put you in touch with something new or to eliminate from your nature something that has to disappear. This is something quite remarkable. If you are truly in a state of intensity of aspiration, there is not a circumstance which does not come to help you to realise this aspiration. Everything comes, everything, as though there were a perfect and absolute consciousness organizing around you all things.

                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - The Mother
                    </Paragraph>
                </>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Perseverance</h2>
                    <h3>Flower associated with Perseverance: Calendula officinalis
                    </h3>
                    <br />
                    <img
                        src="/images/gt3.11.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                    />
                    <img
                        src="/images/gt3.12.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                    />
                    <br />
                    <Paragraph className="italic">

                        “One must have an unfaltering perseverance, be ready to begin again a
                        hundred times the same thing with the same intensity with which one did it
                        the first time and as though one had never done it before.”
                        <br />
                        <br />

                        “The road of yoga is long. Whatever method is used, persistence and
                        perseverance are essential. A yoga like this needs patience, because it
                        means a change, both of the radical means and of each part and detail
                        of our nature.“
                        <br />
                        <br />

                        “If one persists, there comes a time when one is victorious.”
                        <br />
                        <br />

                        “Victory is to the most persistent.”
                        <br />
                        <br />

                        “Perseverance is patience in action. The decision to go to the very end.”
                        <br />
                        <br />

                        “It is by persevering that one conquers difficulties, not by running away from them. One who perseveres is sure to triumph. Victory goes to the most enduring. Always do your best and the Lord will take care of the results.”
                        <br />
                        <br />

                        “Perseverance breaks down all obstacles.”

                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - The Mother
                    </Paragraph>
                </>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Gratitude</h2>
                    <h3>Flower associated with Gratitude: Ipomoea carnea
                    </h3>
                    <br />
                    <img
                        src="/images/gt3.13.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                    />
                    <img
                        src="/images/gt3.14.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                    />
                    <br />
                    <Paragraph className="italic">

                        “It is certainly, of all the movements within the reach of human consciousness,
                        <br />
                        <br />
                        the one that draws you the most out of your ego.”
                        <br />
                        <br />

                        “A loving recognition of the Grace received from the Divine. A humble
                        recognition of all that the Divine has done and is doing for you. The
                        spontaneous feeling of obligation to the Divine, which makes you do
                        your best to become less unworthy of what the Divine is doing for you.”
                        <br />
                        <br />

                        “There is nothing that gives you a joy equal to that of gratitude. You hear
                        a bird sing, you see a lovely flower, you look at a little child, observe an act of generosity, read a beautiful sentence, look at the setting sun, anything whatever: suddenly this comes upon you, this kind of emotion, so deep, so intense, that the world manifests the Divine that there is something behind the world which is the Divine.”
                        <br />
                        <br />

                        “The ego thinks of what it wants and has not. This is its constant preoccupation. The soul is aware of what it is given and lives in endless gratitude.”
                        <br />
                        <br />

                        “The pure flame of gratefulness must always burn in our heart, warm, sweet and bright, to dissolve all egoism and all obscurity;
                        the flame of gratefulness for the Supreme’s Grace who leads the sadhak to his goal - and the more he is grateful, recognises this
                        action of the Grace and is thankful for it, the shorter is the way.”
                        <br />
                        <br />

                        “The whole being offers itself to the Lord in absolute trust.”
                        <br />
                        <br />

                        “Physically, materially, upon earth, it is in gratitude that one finds the source of the purest delight.”
                        <br />
                        <br />

                        “Gratitude opens all the closed doors and allows the saving Grace to enter.”

                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - The Mother
                    </Paragraph>
                </>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Humility</h2>
                    <h3>Flower associated with Humility: Agrostis nebulosa
                    </h3>
                    <br />
                    <img
                        src="/images/gt3.15.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                    />
                    <img
                        src="/images/gt3.16.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                    />
                    <br />
                    Q: What is the right and the wrong way of being humble?
                    <br />
                    <br />

                    <Paragraph className="italic">

                        “It is very simple, when people are told “be humble”, they think
                        Immediately of “being humble before other men” and that humility is
                        wrong. True humility is humility before the Divine, that is, a precise, exact,
                        living sense that one is nothing, one can do nothing, understand nothing
                        without the Divine, that even if one is exceptionally intelligent and capable,
                        this is nothing in comparison with the divine Consciousness, and this sense
                        one must always keep, because then one always has the true attitude of
                        receptivity – a humble receptivity that does not put personal pretensions
                        in opposition to the Divine.”
                        <br />
                        <br />
                        “Humility is that state of consciousness in which, whatever the realization, you know the infinite is still in front of you.”
                        <br />
                        <br />
                        “Humility is the recognition that one does not know, that one knows nothing, and that there may be something beyond what presently appears to us as the truest, the most noble or disinterested.”
                        <br />
                        <br />
                        “Humility: adorable in its simplicity.”
                        <br />
                        <br />
                        “To be humble means for the mind, the vital and the body never to forget that without the Divine they know nothing, are nothing and can do nothing; without the Divine they are nothing but ignorance, chaos and impotence. The Divine alone is Truth, Life, Power, Love, Felicity.”
                        <br />
                        <br />
                        “True humility consists in knowing that the Supreme Consciousness, the Supreme Will alone exists and that the I is not.”

                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - The Mother
                    </Paragraph>
                </>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Sincerity</h2>
                    <h3>Flower associated with Sincerity: Aster amellus
                    </h3>
                    <br />
                    <img
                        src="/images/gt3.17.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                    />
                    <img
                        src="/images/gt3.18.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                    />
                    <br />
                    <Paragraph className="italic">
                        “To be sincere is to be pure. As Sri Aurobindo tells us, ‘Desire nothing but
                        the purity, force, light, wideness, calm, Ananda of the Divine Consciousness,
                        and its insistence to transform and perfect your mind, life and body.”
                        <br />
                        <br />
                        “Every act of sincerity carries in itself its own reward: the feeling of
                        purification, of soaring upwards, of the liberation one gets when one has
                        rejected even one tiny particle of falsehood.
                        Sincerity is the safeguard, the protection, the guide, and finally the
                        transforming power.”
                        <br />
                        <br />
                        “Oh! It is very difficult. Just try for one hour and you will see how very difficult it is. Only one hour, to be totally, absolutely sincere. To let nothing pass. That is, all one does, all one feels, all one thinks, all one wants, is exclusively the Divine.”
                        <br />
                        <br />
                        “Do you know what perfect sincerity is?…
                        <br />
                        Never to try to deceive oneself, never let any part of the being try to find out a way of convincing the others, never to explain favourably what one does in order to have an excuse for what one wants to do, never to close one’s eyes when something is unpleasant, never to let anything pass, telling oneself, “That is not important, next time it will be better.”
                        <br />
                        <br />
                        “Be wholly sincere, never try to deceive others. And try never to deceive yourself.
                        <br />
                        To be constantly the true flame that burns like an offering.”
                        <br />
                        <br />
                        “The first thing is not to deceive oneself. One knows one cannot deceive the Divine; even the cleverest of the Asuras cannot deceive the Divine. But even when one has understood that, one sees that quite often in one’s life, in the course of the day, one
                        tries to deceive oneself without even knowing it, spontaneously and almost automatically. One always gives favourable explanations for all that one does, for one’s words, for one’s acts. That is what happens first. I am not speaking of obvious things like quarrelling and saying, “It is the other one’s fault”, I am speaking of the very tiny things of daily life...
                        <br />
                        This is what I call being sincere. When you are with someone, if you are sincere, instantaneously your way of reacting should be to do the right thing, even when you are with someone who does not do it. Take the most common example of someone who gets angry: instead of saying things that hurt, you say nothing, you keep calm and quiet, you do not catch the contagion of the anger. You have only to look at yourself to see if this is easy. It is quite an elementary thing, a very small beginning to know whether you are sincere. And I am not speaking of those who catch every contagion, even that of coarse joking nor of those who commit the same stupidity as the others. I tell you: if you look at yourself with sharp eyes, you will
                        <br />
                        catch in yourself insincerities by the hundred, even though you are trying to be sincere in your general attitude. You will see how
                        difficult it is.”
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - The Mother
                    </Paragraph>
                </>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Peace</h2>
                    <h3>Flower associated with with Peace: Curcuma zedoaria
                    </h3>
                    <br />
                    <img
                        src="/images/gt3.19.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                    />
                    <img
                        src="/images/gt3.20.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                    />
                    <br />
                    <Paragraph className="italic">
                        “In the liberation of the soul from the ignorance, the very first foundation is
                        peace, calm, the silence and quietude of the Eternal and Infinite…
                        A consummate power and greater formation of the spiritual ascension
                        takes up this peace of liberation into the bliss of a perfect experience and
                        realisation of the eternal beatitude, the bliss of the Eternal and the Infinite.”
                        <br />
                        <br />

                        “In the very depths of your being, deep within your breast, the Divine
                        Presence is always there, luminous and peaceful, full of love and wisdom.
                        It is there so that you may unite with it and it may transform you into a
                        luminous and radiant consciousness.”
                        <br />
                        <br />

                        “Peace and stillness are the great remedy for disease. When we can bring peace in our cells, we are cured.”
                        <br />
                        <br />

                        “No matter what one wants to realise, one must begin by establishing this perfect and immutable peace; it is the basis from which one must work.”
                        <br />
                        <br />

                        “Each time that you feel restless you ought to repeat, speaking inside yourself without exterior sound and thinking of me at the
                        same time:
                        “Peace, peace, O my heart!” Do it steadily and you will be pleased with the result.”
                        <br />
                        <br />

                        “It is only in tranquility and peace that one can know what is the best thing to do.”<br />
                        “If you ask from within for peace, it will come.”<br />
                        “There is no greater peace than that of a pure mind.”<br />
                        “The Divine is Supreme Peace. Be with the Divine and you will be in peace.”<br />
                        “Nowhere will you be able to find peace unless you have peace in your heart.”<br />
                        “In peace and inner silence you will more and more become conscious of the constant Presence.”<br />
                        “It is in peace that knowledge and power are truly effective.”<br />
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - The Mother
                    </Paragraph>
                </>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Equality</h2>
                    <h3>Flower associated with Equality: Iberis sempervirens
                    </h3>
                    <br />
                    <img
                        src="/images/gt3.21.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                    />
                    <img
                        src="/images/gt3.22.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                    />
                    <br />
                    <Paragraph className="italic">
                        The very first necessity for spiritual perfection is a perfect equality…. The
                        perfect equality of our Spirit and nature is a means by which we can move
                        back from the troubled and ignorant outer consciousness into the inner
                        kingdom of heaven and possess the Spirit’s eternal kingdoms of
                        greatness, joy and peace… “
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - Sri Aurobindo
                    </Paragraph>
                    <br />

                    <Paragraph className="italic">
                        “Equality: Immutable peace and calm.”
                        <br />
                        <br />

                        “Equality means a quiet and unmoved mind and vital, it means not to be
                        touched or disturbed by things that happen or things said or done to you, but
                        to look at them with a straight look, free from the distortions created by personal feeling, and to try to understand what is behind them, why they happen, what is to be learnt from them, what is it in oneself which they are cast against and what inner profit or progress one can make out of them; it means self-mastery over the vital movements,- anger and sensitiveness and pride as well as desire and the rest, - not to let them get hold of the emotional being and disturb the inner peace, not to speak and act in the rush and impulsion of these things, always to act and speak out of a calm inner poise of the spirit. It is not easy to have this equality in any full perfect measure, but one should always try more and more to make it the basis of one’s inner state and outer movements.”
                        <br />
                        <br />

                        “Equal in all circumstances, keeps a perfect mastery of himself and remains peaceful in the presence of whatever happens.”
                        <br />
                        <br />

                        “Equality means another thing - to have an equal view of men and their nature and acts and the forces that move them; it helps
                        one to see the truth about them by pushing away from the mind all personal feeling in one’s seeing and judgment and even all the mental bias. Personal feeling always distorts and makes one see in men’s actions, not only the actions themselves, but things behind them which, more often than not, are not there. Misunderstanding, misjudgment which could have been avoided are the result; things of small consequence assume larger proportions. I have seen that more than half of the untoward happenings of this kind in life are due to this cause. But in ordinary life personal feeling and sensitiveness are a constant part of human nature and may be needed there for self-defence, although, I think, even there, a strong, large and equal attitude towards men and things would be a much better line of defence. But for a sadhak, to surmount them and live rather in the calm strength of the spirit is an essential part of his progress.”
                        <br />
                        <br />

                        “Someone who knows how to smile in all circumstances is very close to true equality of soul.”
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - The Mother
                    </Paragraph>
                    <br />

                    <Paragraph className="italic">
                        “Equality does not mean a fresh ignorance or blindness; it does not call for and need not initiate a greyness of vision and a blotting out of all hues. Difference is there, variation of expression is there and this variation we shall appreciate, - far more justly than we could when the eye was clouded by a partial and erring love and hate, admiration and scorn, sympathy and antipathy, attraction and repulsion. But behind the variation we shall always see the Complete and Immutable who dwells within it and we shall feel, know or at least, if it is hidden from us, trust in the wise purpose and divine necessity of the manifestation, whether it appear to our human standards harmonious and perfect or crude and unfinished or even false and evil.”
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - Sri Aurobindo
                    </Paragraph>
                </>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Generosity</h2>
                    <h3>Flower associated with Generosity: Impatiens balsamina
                    </h3>
                    <br />
                    <img
                        src="/images/gt3.23.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                    />
                    <img
                        src="/images/gt3.24.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                    />
                    <br />
                    <Paragraph className="italic">
                        Generosity gives and gives itself without bargaining. Gives for the joy of
                        giving.”
                    </Paragraph>
                    <br />

                    Q: Sri Aurobindo says here about Mahalakshmi: “All that is poor...
                    repels her advent”?
                    <br />
                    <br />
                    <Paragraph className="italic">

                        “Yes, poor, without generosity, without ardour, without amplitude,
                        without inner richness; all that is dry, cold, coiled up, prevents the coming
                        of Mahalakshmi. It is not a question of big money, you know! An
                        extremely rich man may be terribly poor from Mahalakshmi’s point of
                        view. And a very poor man may be very rich if his heart is generous....
                        A poor man is a man having no qualities, no force, no strength, no generosity. He is also a miserable, unhappy man. Moreover, one is unhappy only when one is not generous - if one has a generous nature which gives of itself without reckoning, one is never unhappy. It is those who are coiled up on themselves and who always want to draw things towards themselves, who see things and the world only through themselves - it is these who are unhappy. But when one gives oneself generously, without reckoning, one is never unhappy, never. It is he who wants to take who is unhappy; he who gives himself is never so.”
                        <br />
                        <br />
                        “Generosity is to find one’s own satisfaction in the satisfaction of others.”
                        <br />
                        <br />

                        “It is to give unstintingly, selflessly, without bargaining or any expectation. It is to give for the joy of giving. It is an opportunity that the Divine gives us for the liberation of the ego and the servitude to self-indulgence, replacing it by the joy of participation in the divine work upon earth, for a true and beautiful and harmonious equipment and ordering of a new, divinised mental, vital and physical existence in whatever way the Divine Mother herself decides in her creative vision.”
                    </Paragraph>
                    <Paragraph className="text-right italic">
                        - The Mother
                    </Paragraph>
                    <br />
                    <br />
                    <Paragraph className="italic">
                        “Nobleness and generosity are the soul's ethereal firmament; without them, one looks at an insect in a dungeon.”

                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - Sri Aurobindo
                    </Paragraph>
                </>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Goodness</h2>
                    <h3>Flower associated with Goodness: Roseda odorata
                    </h3>
                    <br />
                    <img
                        src="/images/gt3.25.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                    />
                    <img
                        src="/images/gt3.26.png"
                        alt="Example"
                        className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                    />
                    <br />
                    <Paragraph className="italic">
                        “I have very often heard people saying, “Oh! now that I am trying to be
                        good, everybody seems to be bad to me!” But this is precisely to teach you
                        that one should not be good with an interested motive, one should not be
                        good so that others will be good to you - one must be good for the sake
                        of being good.
                        <br />

                        It is always the same lesson: one must do as well as one can, the best one
                        can, but without expecting a result, without doing it with a view to the
                        result. Just this attitude, to expect a reward for a good action - to become
                        good because one thinks that this will make life easier - takes away all
                        value from the good action.
                        <br />

                        You must be good for the love of goodness, you must be just for the love of justice, you must be pure for the love of purity
                        and you must be disinterested for the love of disinterestedness; then you are sure to advance on the way.”
                        <br />
                        <br />

                        “You must be good for the love of goodness…then you are sure to advance on the way. Good will for all and good will from all is the basis of peace and harmony. Your heart is the home of a luminous goodness; let it govern your whole being.”
                        <br />
                        <br />

                        “One should keep goodwill and love constantly in his heart and let them pour out upon all with tranquility and with equanimity.”
                        <br />
                        <br />

                        “Indeed, the good will hidden in all things reveals itself everywhere to the one who carries good will in his consciousness.”
                        <br />
                        <br />

                        “A day spent without doing a good deed is a day without a soul.”
                        <br />
                        <br />

                        “A tireless benevolence, clear-seeing and comprehensive, free from all personal reaction, is the best way to love God and serve
                        Him upon earth.”
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - The Mother
                    </Paragraph>
                    <br />
                    <Paragraph className="italic">
                        “Good is all that helps the individual and the world towards their individual fullness.”
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">
                        - Sri Aurobindo
                    </Paragraph>
                </>
            </> :
            <>
                <img
                    src="/images/gt3.1.png"
                    alt="Example"
                    className="
            float-none mx-auto sm:float-left
            sm:mr-4 mb-2
            w-72 h-auto
            rounded-lg
            "
                />
                <img
                    src="/images/gt3.2.png"
                    alt="Example"
                    className="
            float-none mx-auto sm:float-right
            sm:ml-4 mb-2
            w-96 h-auto
            rounded-lg
            "
                />
                <br />
                <Paragraph>
                    <i>«Цветы говорят с нами, когда мы умеем их слушать», — сказала Мать. —{" "}
                        «Это тонкий и благоухающий язык.»</i> Мать определила значения почти
                    для девятисот цветов.
                    <br />
                    <br />
                    Мать, у каждого цветка есть своё значение, не так ли?
                    <br />
                    <br />
                    <i>
                        «Не так, как мы понимаем это умом. Когда придают цветку точное
                        значение, это умственная проекция. Цветок не обладает эквивалентом
                        ментального сознания. Это скорее похоже на движение младенца — не
                        чувство и не ощущение, но что-то из обоих: спонтанное движение,
                        особая вибрация. Если войти в контакт с этой вибрацией, почувствовать
                        её, тогда приходит впечатление, которое может быть переведено
                        мыслью. Так я придаю цветам и растениям значения. Это своего рода
                        отождествление с вибрацией, восприятие качества, которое она
                        выражает. Постепенно — или иногда мгновенно — происходит совпадение
                        этих вибраций, которые принадлежат витально-эмоциональной сфере, и
                        вибрации ментальной мысли. Если достаточно согласия, тогда возникает
                        прямое восприятие того, что растение может означать.»
                    </i>
                    <br />
                    <p className="text-right">— Мать</p>
                </Paragraph>
                <br />
                <br />

                <>
                    <h2 className="text-xl">Мужество</h2>
                    <h3>Цветок, связанный с мужеством: Calotropis gigantea</h3>
                    <br />
                    <img
                        src="/images/gt3.3.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-left
      sm:mr-4 mb-2
      w-72 h-auto
      rounded-lg
    "
                    />
                    <img
                        src="/images/gt3.4.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-right
      sm:ml-4 mb-2
      w-96 h-auto
      rounded-lg
    "
                    />
                    <br />
                    <Paragraph className="italic">
                        «Мужество — это полное отсутствие страха в любой форме.»
                        <br />
                        <br />
                        «… Страх — это нечистота, одна из самых сильных, одна из тех, что исходят
                        наиболее прямо от антибожественных сил, стремящихся разрушить божественное
                        действие на земле. Первая обязанность тех, кто по-настоящему хочет идти по
                        пути йоги, — это всеми силами, с искренностью и настойчивостью устранить из
                        своего сознания даже тень страха. Чтобы идти по пути, нужно быть
                        бесстрашным и никогда не предаваться мелкому, слабому, жалкому отступлению
                        в себя, которым является страх.
                        <br />
                        <br />
                        Непоколебимое мужество, совершенная искренность и искреннее самоотдавание,
                        без расчёта и без торговли, без веры, требующей доказательств, без доверия
                        ради защиты — именно это необходимо, чтобы идти по пути, и только это
                        способно действительно защитить вас от всякой опасности.»
                        <br />
                        <br />
                        «Мужество — это способность встретить всё в жизни без малейшего смятения во
                        всех частях существа и с постоянным осознанием Божественного Присутствия.»
                        <br />
                        <br />
                        «Прогресс может быть медленным, откаты — частыми, но если сохраняется
                        мужественная воля, однажды вы непременно одержите победу и увидите, как все
                        трудности растворяются перед сиянием сознания истины.»
                        <br />
                        <br />
                        «Каждый, кто мужествен, может передать мужество другим, как пламя одной
                        свечи может зажечь другую.»
                        <br />
                        <br />
                        «Когда мы доверяем Божественной Милости, мы обретаем непоколебимое
                        мужество.»
                        <br />
                        <br />
                        «Никогда не путайте безрассудство с мужеством и равнодушие — с терпением.»
                        <br />
                        <br />
                        «Высшее мужество — признать свои ошибки.»
                        <br />
                        <br />
                        «Нет большего мужества, чем быть всегда правдивым.»
                        <br />
                        <br />
                        «Имей мужество быть полностью откровенным с Божественным.»
                        <br />
                        <br />
                        «Однажды мы говорили о мужестве как об одном из совершенств… Но это
                        мужество — вкус к высшему приключению. И этот вкус овладевает вами полностью
                        и бросает вас, без расчёта и без запаса, в великое приключение божественного
                        поиска, великое приключение встречи с Божественным, ещё более великое
                        приключение божественной Реализации. Вы бросаетесь в это приключение, не
                        оглядываясь и не задавая себе ни единого вопроса: “Что будет дальше?”
                        Потому что если вы спрашиваете, что будет дальше, вы никогда не начнёте —
                        вы останетесь на месте, прикованные к страху потерять что-то, потерять
                        равновесие.»
                        <br />
                        <br />
                    </Paragraph>
                    <Paragraph className="text-right italic">— Мать</Paragraph>
                </>

                <br />
                <br />

                <>
                    <h2 className="text-xl">Прогресс</h2>
                    <h3>Цветок, связанный с прогрессом: Catharanthus roseus</h3>
                    <br />
                    <img
                        src="/images/gt3.5.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-left
      sm:mr-4 mb-2
      w-72 h-auto
      rounded-lg
    "
                    />
                    <img
                        src="/images/gt3.6.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-right
      sm:ml-4 mb-2
      w-96 h-auto
      rounded-lg
    "
                    />
                    <br />
                    <Paragraph className="italic">
                        «Первое условие внутреннего прогресса — признать любое ошибочное движение в
                        любой части нашей природы — неверную мысль, неверное чувство, неверную речь,
                        неверное действие. Под “ошибочным” понимается то, что отклоняется от Истины,
                        от Высшего Сознания и Высшего Я, от Пути Божественного. Как только это
                        признано, оно отдаётся Божественному, чтобы Свет и Милость сошли и заменили
                        его правильным движением истинного Сознания.»
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Шри Ауробиндо</Paragraph>
                    <br />
                    <Paragraph className="italic">
                        «Прежде всего именно воля к прогрессу и самоочищению разжигает огонь. Воля к
                        прогрессу. Те, кто обладают сильной волей и направляют её к духовному
                        развитию и очищению, автоматически зажигают огонь внутри себя.»
                        <br />
                        <br />
                        «Цель земной жизни — прогресс. Если вы перестаёте развиваться, вы умираете.
                        Каждый момент без прогресса — это шаг к могиле.»
                        <br />
                        <br />
                        «С того мгновения, как вы удовлетворены и больше не стремитесь, вы начинаете
                        умирать. Жизнь — это движение, усилие, шаг вперёд, восхождение к будущим
                        откровениям и осуществлениям. Нет ничего более опасного, чем желание
                        остановиться.»
                        <br />
                        <br />
                        «Не думайте о том, кем вы были; думайте только о том, кем хотите стать — и
                        вы непременно будете прогрессировать.»
                        <br />
                        <br />
                        «Старайтесь радоваться всему, что делаете. Когда вас интересует то, что вы
                        делаете, вы находите в этом радость. Чтобы заинтересоваться, нужно пытаться
                        делать всё лучше и лучше.»
                        <br />
                        <br />
                        «Всегда есть чему учиться и в чём совершенствоваться. В каждой ситуации
                        можно найти возможность для урока и прогресса.»
                    </Paragraph>
                    <Paragraph className="text-right italic">— Мать</Paragraph>
                </>

                <br />
                <br />

                <>
                    <h2 className="text-xl">Восприимчивость</h2>
                    <h3>Цветок, связанный с восприимчивостью: Gladiolus xhortulanus</h3>
                    <br />
                    <img
                        src="/images/gt3.7.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-left
      sm:mr-4 mb-2
      w-72 h-auto
      rounded-lg
    "
                    />
                    <img
                        src="/images/gt3.8.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-right
      sm:ml-4 mb-2
      w-96 h-auto
      rounded-lg
    "
                    />
                    <br />
                    <Paragraph className="italic">
                        «Это значит — принимать Божественную Силу и позволять ей действовать,
                        направляя наше видение, волю и действия. Должно быть полное и
                        непрерывное согласие, готовность позволить Божественной Силе делать
                        с нами всё, что нужно для выполнения работы. Восприимчивость — это
                        способность принимать и удерживать Божественные Действия.»
                        <br />
                        <br />
                        «Моя любовь всегда с вами; если вы её не чувствуете, это потому, что вы
                        не способны её принять. У вас недостаточно восприимчивости, её нужно
                        развивать. Для этого вы должны открыться, а открыться можно только
                        отдавая себя. Если вы отдаёте себя без расчёта и без ожидания, тогда вы
                        становитесь способными принимать.»
                        <br />
                        <br />
                        «Восприимчивость возрастает вместе с расширением сознания и сосредоточенностью устремления.»
                        <br />
                        <br />
                        «Цветы очень восприимчивы и радуются, когда их любят.»
                        <br />
                        <br />
                        «Быть сознательным в Божественной Воле и преданным ей.»
                    </Paragraph>
                    <br />
                    <Paragraph>
                        Вопрос: Мать, от чего зависит восприимчивость?
                    </Paragraph>
                    <br />
                    <Paragraph className="italic">
                        «Прежде всего от искренности — действительно ли человек хочет принять. Основные факторы — искренность и смирение. Нет ничего, что закрывало бы сильнее, чем тщеславие… Но если хотя бы малая часть существа признает: “Да, я ошибся, мне не следует так думать, чувствовать или поступать”, — тогда открывается пространство, в которое сразу входит поток света.»
                        <br />
                        <br />
                        «Восприимчивость — это сила принимать Божественную Силу, чувствовать её присутствие и позволять ей направлять видение, волю и действия.»

                    </Paragraph>
                    <Paragraph className="text-right italic">— Мать, Шри Ауробиндо</Paragraph>
                </>

                <br />
                <br />

                <>
                    <h2 className="text-xl">Стремление</h2>
                    <h3>Цветок, связанный со стремлением: Nyctanthes arbor-tristis</h3>
                    <br />
                    <img
                        src="/images/gt3.9.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-left
      sm:mr-4 mb-2
      w-72 h-auto
      rounded-lg
    "
                    />
                    <img
                        src="/images/gt3.10.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-right
      sm:ml-4 mb-2
      w-96 h-auto
      rounded-lg
    "
                    />
                    <br />
                    <Paragraph className="italic">
                        «Вкус к высшему приключению — это стремление: стремление, которое
                        охватывает вас полностью и бросает, без расчёта и без запаса, в великое
                        приключение божественного открытия, великое приключение встречи с
                        Божественным и ещё большее приключение божественной Реализации.»
                        <br />
                        <br />
                        «Стремление должно быть твёрдым и неугасимым, внимательным и
                        постоянным — стремлением всего существа, стремлением соединиться
                        с Божественным, полностью отдать себя Ему.»
                        <br />
                        <br />
                        «Выше слов и мыслей всегда должна гореть яркая и ровная пламя устремления.»
                        <br />
                        <br />
                        «Стремление — одно из чудесных даров Милости, данных человеческой природе.»
                        <br />
                        <br />
                        «Мы должны стремиться всем своим существом, чтобы проявление пришло скорее и было полным.»
                        <br />
                        <br />
                        «На искреннее стремление Любовь отвечает спонтанно.»
                        <br />
                        <br />
                        «Если вы пребываете в искреннем стремлении, всё вокруг организуется, чтобы помочь вам:
                        одни обстоятельства поддержат вас напрямую, другие — косвенно, очищая и раскрывая новые стороны вашей природы.»
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Мать</Paragraph>
                </>

                <br />
                <br />

                <>
                    <h2 className="text-xl">Настойчивость</h2>
                    <h3>Цветок, связанный с настойчивостью: Calendula officinalis</h3>
                    <br />
                    <img
                        src="/images/gt3.11.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-left
      sm:mr-4 mb-2
      w-72 h-auto
      rounded-lg
    "
                    />
                    <img
                        src="/images/gt3.12.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-right
      sm:ml-4 mb-2
      w-96 h-auto
      rounded-lg
    "
                    />
                    <br />
                    <Paragraph className="italic">
                        «Необходимо иметь непоколебимую настойчивость — быть готовым
                        начинать одно и то же сотни раз с той же силой, словно впервые.»
                        <br />
                        <br />
                        «Путь йоги долог. Какой бы метод ни использовался, упорство и
                        настойчивость необходимы. Такая йога требует терпения, потому
                        что она означает преобразование всего существа и каждой его части.»
                        <br />
                        <br />
                        «Если продолжать, придёт момент победы.»
                        <br />
                        <br />
                        «Победа — тому, кто наиболее настойчив.»
                        <br />
                        <br />
                        «Настойчивость — это терпение в действии. Решимость идти до конца.»
                        <br />
                        <br />
                        «Преодолевают трудности не бегством, а настойчивостью.
                        Тот, кто настойчив, непременно триумфует.»
                        <br />
                        <br />
                        «Настойчивость разрушает все препятствия.»
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Мать</Paragraph>
                </>

                <br />
                <br />

                <>
                    <h2 className="text-xl">Благодарность</h2>
                    <h3>Цветок, связанный с благодарностью: Ipomoea carnea</h3>
                    <br />
                    <img
                        src="/images/gt3.13.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-left
      sm:mr-4 mb-2
      w-72 h-auto
      rounded-lg
    "
                    />
                    <img
                        src="/images/gt3.14.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-right
      sm:ml-4 mb-2
      w-96 h-auto
      rounded-lg
    "
                    />
                    <br />
                    <Paragraph className="italic">
                        «Это, несомненно, из всех движений человеческого сознания то, которое
                        больше всего выводит из эго.»
                        <br />
                        <br />
                        «Любящее признание Милости, полученной от Божественного.
                        Смиренное признание всего, что Божественное сделало и делает для вас.
                        Спонтанное чувство обязанности перед Божественным, которое
                        побуждает стараться быть менее недостойным Его Даров.»
                        <br />
                        <br />
                        «Нет радости большей, чем радость благодарности. Вы слышите пение
                        птицы, видите прекрасный цветок, ребёнка, акт щедрости, закат…
                        — и внезапно приходит это чувство, глубокое и интенсивное: мир раскрывает Божественное.»
                        <br />
                        <br />
                        «Эго думает о том, чего ему не хватает. Душа осознаёт то, что ей дано, и живёт в бесконечной благодарности.»
                        <br />
                        <br />
                        «Чистое пламя благодарности должно всегда гореть в сердце, согревая и рассеивая тьму — пламя благодарности за Милость Верховного, ведущего садхака к цели. Чем больше благодарность, тем короче путь.»
                        <br />
                        <br />
                        «Всё существо предаётся Господу в абсолютном доверии.»
                        <br />
                        <br />
                        «Физически, материально, на земле именно в благодарности находится источник самой чистой радости.»
                        <br />
                        <br />
                        «Благодарность открывает все закрытые двери и впускает спасительную Милость.»
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Мать</Paragraph>
                </>

                <br />
                <br />

                <>
                    <h2 className="text-xl">Смирение</h2>
                    <h3>Цветок, связанный со смирением: Agrostis nebulosa</h3>
                    <br />
                    <img
                        src="/images/gt3.15.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-left
      sm:mr-4 mb-2
      w-72 h-auto
      rounded-lg
    "
                    />
                    <img
                        src="/images/gt3.16.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-right
      sm:ml-4 mb-2
      w-96 h-auto
      rounded-lg
    "
                    />
                    <br />
                    Вопрос: Что значит быть смиренным правильно и неправильно?
                    <br />
                    <br />
                    <Paragraph className="italic">
                        «Очень просто: когда людям говорят “будь смиренным”, они сразу думают
                        о смирении перед другими людьми — и это неверно. Истинное смирение
                        — смирение перед Божественным: это точное, живое чувство, что сам
                        по себе ты ничто, ничего не можешь и не понимаешь без Божественного,
                        и что даже если ты необычайно умен и способен, это ничто в сравнении с
                        Божественным Сознанием. Это чувство должно всегда оставаться, ибо
                        оно даёт истинное состояние восприимчивости — смиренной
                        восприимчивости, не ставящей личные притязания против Божественного.»
                        <br />
                        <br />
                        «Смирение — это состояние сознания, в котором, что бы ты ни познал, ты знаешь: впереди всё ещё бесконечность.»
                        <br />
                        <br />
                        «Смирение — это признание, что ты не знаешь, что знаешь ничто, и что всегда есть нечто за пределом того, что представляется тебе сейчас самым истинным или благородным.»
                        <br />
                        <br />
                        «Смирение: очаровательно в своей простоте.»
                        <br />
                        <br />
                        «Быть смиренным — значит для ума, витала и тела никогда не забывать, что без Божественного они ничего не знают, ничем не являются и ничего не могут. Лишь Божественное есть Истина, Жизнь, Сила, Любовь, Блаженство.»
                        <br />
                        <br />
                        «Истинное смирение — это знание, что существует лишь Верховное Сознание, Верховная Воля, а “я” не существует.»
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Мать</Paragraph>
                </>

                <br />
                <br />

                <>
                    <h2 className="text-xl">Искренность</h2>
                    <h3>Цветок, связанный с искренностью: Aster amellus</h3>
                    <br />
                    <img
                        src="/images/gt3.17.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-left
      sm:mr-4 mb-2
      w-72 h-auto
      rounded-lg
    "
                    />
                    <img
                        src="/images/gt3.18.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-right
      sm:ml-4 mb-2
      w-96 h-auto
      rounded-lg
    "
                    />
                    <br />
                    <Paragraph className="italic">
                        «Быть искренним — значит быть чистым. Как говорит Шри Ауробиндо:
                        “Не желай ничего, кроме чистоты, силы, света, широты, покоя, Ананды
                        Божественного Сознания и его настойчивого стремления преобразить и
                        совершенствовать твой ум, жизнь и тело.”»
                        <br />
                        <br />
                        «Каждый акт искренности несёт свою награду: чувство очищения,
                        подъёма, освобождения, которое приходит, когда отвергнута даже
                        крошечная частица лжи. Искренность — это защита, проводник и, в
                        конце концов, преобразующая сила.»
                        <br />
                        <br />
                        «О, это очень трудно. Попробуй всего лишь один час — и увидишь, как сложно быть полностью, абсолютно искренним. Чтобы ни одна мысль, ни одно действие, ни одно желание не шли мимо Божественного.»
                        <br />
                        <br />
                        «Совершенная искренность — это никогда не обманывать себя, не оправдывать свои слабости, не закрывать глаза на неприятное, не говорить: “Это неважно, в следующий раз будет лучше.” Быть целиком искренним, не обманывать других и не обманывать себя. Быть пламенем, горящим как жертвоприношение.»
                        <br />
                        <br />
                        «Первое — не обманывать себя. Никто не может обмануть Божественное. Даже тонкие самообманы в повседневной жизни — это препятствия. Смотреть честно в себя — значит быть искренним.»
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Мать</Paragraph>
                </>

                <br />
                <br />

                <>
                    <h2 className="text-xl">Мир</h2>
                    <h3>Цветок, связанный с миром: Curcuma zedoaria</h3>
                    <br />
                    <img
                        src="/images/gt3.19.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-left
      sm:mr-4 mb-2
      w-72 h-auto
      rounded-lg
    "
                    />
                    <img
                        src="/images/gt3.20.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-right
      sm:ml-4 mb-2
      w-96 h-auto
      rounded-lg
    "
                    />
                    <br />
                    <Paragraph className="italic">
                        «Освобождение души от невежества начинается с мира, покоя, тишины и
                        безмолвия Вечного и Бесконечного… Это основание духовного восхождения.»
                        <br />
                        <br />
                        «В глубинах твоего существа, в сердце, всегда пребывает Божественное
                        Присутствие — светлое, мирное, полное любви и мудрости. Оно здесь,
                        чтобы соединиться с тобой и преобразить твоё сознание.»
                        <br />
                        <br />

                        «Мир и неподвижность — великое средство от болезни. Когда вносим мир
                        в клетки, приходит исцеление.» “«С чего бы ты ни начинал, нужно утвердить
                        совершенный и неизменный мир.»
                        <br />
                        <br />

                        «Повторяй внутри себя: “Мир, мир, о моё сердце!” — и результат обязательно придёт.»
                        <br />
                        <br />

                        «Только в тишине и покое можно знать, что есть наилучшее.»
                        <br />
                        <br />

                        «Если попросить о мире изнутри — он придёт.»
                        <br />
                        <br />

                        «Божественное — это Верховный Мир. Соединись с Ним — и ты будешь в мире.»
                        <br />


                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Мать</Paragraph>
                </>

                <br />
                <br />

                <>
                    <h2 className="text-xl">Ровность</h2>
                    <h3>Цветок, связанный с равенством: Iberis sempervirens</h3>
                    <br />
                    <img
                        src="/images/gt3.21.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-left
      sm:mr-4 mb-2
      w-72 h-auto
      rounded-lg
    "
                    />
                    <img
                        src="/images/gt3.22.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-right
      sm:ml-4 mb-2
      w-96 h-auto
      rounded-lg
    "
                    />
                    <br />
                    <Paragraph className="italic">
                        «Первая необходимость для духовного совершенства — это совершенное
                        равенство… Оно ведёт нас из смятённого внешнего сознания во внутреннее
                        Царство Духа, в его вечные владения радости, величия и покоя.»
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Шри Ауробиндо</Paragraph>
                    <br />
                    <Paragraph className="italic">
                        «Равенство — это неизменный мир и покой.»
                        <br /><br />
                        «Равенство значит умиротворённый и спокойный ум и витал. Это значит
                        не поддаваться тому, что происходит вовне, а смотреть прямо, без
                        искажений личного чувства, стараясь понять, почему это случилось, чему
                        учит, что в нас самих отвечает на это.»
                        <br /><br />
                        «Равенство — это самоконтроль над движениями витала — гневом, гордыней, желанием, — чтобы они не захватывали эмоциональное существо.»
                        <br /><br />
                        «Тот, кто умеет улыбаться при любых обстоятельствах, очень близок к истинному равенству души.»
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Мать</Paragraph>
                    <br />
                    <Paragraph className="italic">
                        «Равенство не означает новой слепоты или безразличия. Оно принимает различия выражений, но за ними видит Единого и Неизменного, кто пребывает в них. Это доверие к Божественной Цели проявления — какой бы несовершенной оно ни казалось человеческому взгляду.»
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Шри Ауробиндо</Paragraph>
                </>

                <br />
                <br />

                <>
                    <h2 className="text-xl">Щедрость</h2>
                    <h3>Цветок, связанный с щедростью: Impatiens balsamina</h3>
                    <br />
                    <img
                        src="/images/gt3.23.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-left
      sm:mr-4 mb-2
      w-72 h-auto
      rounded-lg
    "
                    />
                    <img
                        src="/images/gt3.24.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-right
      sm:ml-4 mb-2
      w-96 h-auto
      rounded-lg
    "
                    />
                    <br />
                    <Paragraph className="italic">
                        «Щедрость даёт и отдаёт себя без расчёта. Дарит ради радости дарения.»
                    </Paragraph>
                    <br />
                    <p>
                        — Вопрос: Шри Ауробиндо говорит о Махалакшми: “Всё бедное
                        отталкивает её приход”…
                    </p>
                    <Paragraph className="italic">
                        «Да, бедное — без щедрости, без огня, без внутреннего богатства. Это
                        не о деньгах. Человек может быть богатым и при этом бедным в глазах
                        Махалакшми. Истинная бедность — это отсутствие силы и щедрости.
                        А подлинная щедрость — это дарить себя, и тогда человек никогда не будет
                        несчастен.»
                        <br /><br />
                        «Щедрость — находить удовлетворение в удовлетворении других.»
                        <br /><br />
                        «Дарить без удержу и ожиданий — это возможность, данная Божественным, для освобождения от эго и участия в Его работе на земле.»
                    </Paragraph>
                    <Paragraph className="text-right italic">— Мать</Paragraph>
                    <br /><br />
                    <Paragraph className="italic">
                        «Благородство и щедрость — небесный свод души; без них человек похож на насекомое в подземелье.»
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Шри Ауробиндо</Paragraph>
                </>

                <br />
                <br />

                <>
                    <h2 className="text-xl">Доброта</h2>
                    <h3>Цветок, связанный с добротой: Rosa odorata</h3>
                    <br />
                    <img
                        src="/images/gt3.25.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-left
      sm:mr-4 mb-2
      w-72 h-auto
      rounded-lg
    "
                    />
                    <img
                        src="/images/gt3.26.png"
                        alt="Example"
                        className="
      float-none mx-auto sm:float-right
      sm:ml-4 mb-2
      w-96 h-auto
      rounded-lg
    "
                    />
                    <br />
                    <Paragraph className="italic">
                        «Я часто слышала: “Теперь, когда я стараюсь быть добрым, все ко мне
                        недоброжелательны.” Но это урок: быть добрым ради самой доброты,
                        а не ради вознаграждения. Добро — это не сделка. Нужно быть добрым
                        ради любви к доброте.»
                        <br /><br />
                        «Доброе сердце — это дом светлой доброты; пусть оно руководит всем
                        существом.»
                        <br /><br />
                        «Нужно хранить доброжелательность и любовь в сердце и излучать их
                        спокойно и равномерно на всех.»
                        <br /><br />
                        «Добрая воля сокрыта во всём и проявляется там, где её несёт сознание.»
                        <br /><br />
                        «День без доброго дела — день без души.»
                        <br /><br />
                        «Усталое, но ясное и всеобъемлющее благожелательство — лучший способ любить Бога и служить Ему на земле.»
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Мать</Paragraph>
                    <br />
                    <Paragraph className="italic">
                        «Добро — это всё, что помогает индивиду и миру приблизиться к полноте.»
                    </Paragraph>
                    <br />
                    <Paragraph className="text-right italic">— Шри Ауробиндо</Paragraph>
                </>

            </>

        }
    </div >;
}
