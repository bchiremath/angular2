import { Component, ElementRef, ViewChild } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}
declare var jQuery:any;
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    private message:string="";
	private messageList:any = [];
    
	
	ngOnInit(){
	let con = document.getElementById('real-example-container');
		window["emojify"].setConfig({
			tag_type : 'message_list',           // Only run emojify.js on this element
			only_crawl_id    : null,            // Use to restrict where emojify.js applies
			img_dir          : 'node_modules/emojify.js/dist/images/basic',  // Directory for emoji images
		});
        jQuery(".chat").draggable();
	}
	
	send(event:Event){
		event.preventDefault();
        if(this.message.trim() === ''){
            return;
        }
		this.messageList.push({
			sender:"me",
			text: this.message
		});
		this.message="";
		setTimeout(()=>{
			window["emojify"].run(jQuery(".chat_msg")[jQuery(".chat_msg").length-1]);
            //window["imojify"](".chat_msg");
		});
        jQuery("#message_list").animate({scrollTop: jQuery("#message_list")[0].scrollHeight }, 1000);
	}	

}

