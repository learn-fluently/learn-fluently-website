import WatchingIcon from '../../../res/images/watching.svg';
import WritingIcon from '../../../res/images/writing.svg';
import SpeakingIcon from '../../../res/images/speaking.svg';
import AnsweringIcon from '../../../res/images/answering.svg';

interface Section {
    title: string;
    description: string;
    icon: string;
    iconDescription: string;
}

export class HowItWorksViewModel {
    // Properties

    public get title(): string {
        return 'The app has four main sections:';
    }

    public get sections(): Section[][] {
        return [
            [
                {
                    title: '1. Watching/Listening',
                    description:
                        'In this section, you will learn new words, hear their pronunciation and try to recognize them.',
                    icon: WatchingIcon,
                    iconDescription: 'Watching',
                },
                {
                    title: '2. Writing',
                    description:
                        'This section is more about listening than writing. <br /> You need to write down everything you hear.<br /> This will improve your listening and dictation skills.',
                    icon: WritingIcon,
                    iconDescription: 'Writing',
                },
            ],
            [
                {
                    title: '3. Speaking',
                    description:
                        'In this part much like the writing section, you need to listen carefully and repeat what you hear. <br /> This will improve your pronunciation. <br /> If your iPhone can understand you everyone can understand you.',
                    icon: SpeakingIcon,
                    iconDescription: 'Speaking',
                },
                {
                    title: '4. Answering',
                    description: 'This section is still under construction.',
                    icon: AnsweringIcon,
                    iconDescription: 'Answering',
                },
            ],
        ];
    }

    public get note(): { title: string; description: string } {
        return {
            title: 'Note:',
            description: `This app is not for beginners.<br> You should already know basic grammar and vocabulary of the language that you want to attain fluency in.`,
        };
    }
}
