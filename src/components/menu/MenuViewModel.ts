import {Routes} from "../Routes";

interface MenuItemViewModel {
    title: string
    link: string
}

export class MenuViewModel {
    // Properties

    public get itemViewModels(): MenuItemViewModel[] {
        return [
            {
                title: "About",
                link: Routes.about
            },
            {
                title: "How it works",
                link: Routes.howItWorks
            },
            {
                title: "Privacy policy",
                link: Routes.privacyPolicy
            },
            {
                title: "Github",
                link: ""
            }
        ]
    }

}