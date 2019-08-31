import { About } from '../pages/about/About';
import { HowItWorks } from '../pages/how-it-works/HowItWorks';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import LogoImage from '../../res/images/logo.png';
import { ComponentClass } from 'react';
import { Routes } from '../../Routes';

interface Route {
    path: string;
    component: ComponentClass;
}

export class AppViewModel {
    // Properties

    public get logo(): { image: string; description: string } {
        return {
            image: LogoImage,
            description: 'Learn Fluently',
        };
    }

    public get routes(): Route[] {
        return [
            {
                path: Routes.about,
                component: About,
            },
            {
                path: Routes.howItWorks,
                component: HowItWorks,
            },
            {
                path: Routes.privacyPolicy,
                component: PrivacyPolicy,
            },
        ];
    }
}
