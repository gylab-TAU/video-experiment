import "jspsych/plugins/jspsych-instructions";

class consentComponent {
    static getConsentTrial() {
        let pages = this.getImageTags();

        let trial = {
            type: 'instructions',
            pages: pages,
            show_clickable_nav: true,
            allow_backward: false,
            button_label_next: "המשך"
        }

        return trial;
    }

    static getImageTags() {
        let tagsArray = [];
        
        for (let i = 1; i <= 2; i++) {
            tagsArray.push('<img src="media/images/consent/consent' + i + '.png" style="max-width:' + window.screen.availWidth + "px; max-height:" + (window.screen.availHeight - 50) +  'px;">');
        }

        return tagsArray;
    }
}

export default consentComponent;