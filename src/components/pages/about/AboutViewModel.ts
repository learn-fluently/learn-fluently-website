import MockupsImage from '../../../res/images/mockups.png';
import DownloadAppStore from '../../../res/images/download-app-store.svg';

export class AboutViewModel {
    // Properties

    public get title(): string {
        return 'Learn Fluently';
    }

    public get descriptions(): string[] {
        return [
            'Want to be fluent? Looking for a way to practice speaking? <br /> This app could help you. <br />By using this app, you can improve your English and any other languages skills.',
            'Learn Fluently is an app for learning English or any other languages. <br /> This app is an open source software, so not only is it free to use, but you can also help make it better.',
        ];
    }

    public get appStoreDownloadLink(): { link: string; icon: string; description: string } {
        return {
            link: 'https://learnfluenlty.com',
            icon: DownloadAppStore,
            description: 'Download learn fluently on app store',
        };
    }

    public get mockupImage(): { image: string; description: string } {
        return {
            image: MockupsImage,
            description: 'Learn Fluently iPhone',
        };
    }
}
