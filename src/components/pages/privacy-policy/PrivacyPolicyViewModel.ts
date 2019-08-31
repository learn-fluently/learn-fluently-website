export class PrivacyPolicyViewModel {
    // Properties

    public get title(): string {
        return 'Privacy Policy';
    }

    public get privacyPolicy(): string[] {
        return [
            `- Learn Fluently app doesn't collect any data, it just uses the data at the moment that you use the app and by removing the app all the data will be permanently removed.`,
            `- This app doesn't send any data to any server, all the data process locally in your phone.`,
            `- Recognizing spoken words happens by using the Speech framework, this is a framework by Apple and it's part of iOS, you can find more details in the <a href="https://developer.apple.com/documentation/speech">documentation</a>.`,
            `- This is an open-source software, so you can look into the code on Github and see how it works.`,
        ];
    }
}
