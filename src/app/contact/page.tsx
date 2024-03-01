import Primary_Btn from '@/components/CSR/Button/Primary_Btn';
import Floating_Input_Field from '@/components/SSR/Card/Floating_Input_Field';
import Floating_Textarea_Field from '@/components/SSR/Card/Floating_Textarea_Field';
import { SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";
import { PiMessengerLogoLight, PiWhatsappLogoLight } from "react-icons/pi";
import { SiMedium } from "react-icons/si";
import { RiTwitterXLine } from "react-icons/ri";
import React from 'react';
import Contact_Card from '@/components/CSR/Card/Contact_Card';

export default function Page() {

	return (
		<div className={ `flex-full-center h-full` }>
			<div className={ `w-full h-full` }>
				<div
					className={ `content_header animate-fade_in_down opacity-0` }
					style={{
						animationDelay:'0.2s',
						animationDuration:'0.5s'
					}}
				>
					Let&apos;s Connect
					<p><span className={ `text-base font-light` }>For business inquiries or potential collaborations, reach out to me.:</span></p>
				</div>
				<div className={ `flex-full-center h-page gap-[5%] my-10` }>

					{/* contact via email form */ }
					<div
						className={ `basis-full animate-fade_in opacity-0` }
						style={{
							animationDuration:'0.5s',
							animationDelay:'0.3s'
						}}
					>
						<div className={ `w-1/2 ml-auto` }>
							<form>
								<Floating_Input_Field
									labelVal={ 'Subject' }
								/>
								<Floating_Input_Field
									labelVal={ 'Your Name' }
								/>
								<Floating_Input_Field
									labelVal={ 'Your Email' }
								/>
								<Floating_Textarea_Field
									labelVal={ 'Message' }
									rows={ 5 }
									maxLength={ 500 }
									className={ `resize-none` }
								/>
								<div>
									<Primary_Btn
										className={ `px-6` }
									>
										Sent
									</Primary_Btn>
								</div>
							</form>
						</div>
					</div>

					{/* contatct with social */ }
					<div
						className={ `basis-full animate-fade_in_up opacity-0` }
						style={{
							animationDuration:'0.45s',
							animationDelay:'0.5s',
						}}
					>
						<div className={ `basis-full flex flex-col justify-center gap-5` }>
							{/* social block 1  */ }
							<div className={ `flex items-center gap-3` }>

								<div>
									<Contact_Card
										desSrc={ 'https://www.linkedin.com/in/safin-ali/' }
										iconNode={ <SlSocialLinkedin
											className={ `mx-auto animate-bounce` } size={ 25 }
										/>
										}
										userId={ `safin-ali` }
									/>
								</div>
								<div>
									<Contact_Card
										desSrc={ 'https://www.linkedin.com/in/safin-ali/' }
										iconNode={ <RiTwitterXLine
											className={ `mx-auto animate-bounce` } size={ 25 }
										/>
										}
										userId={ `safin-ali` }
									/>
								</div>
								<div>
									<Contact_Card
										desSrc={ 'https://web.whatsapp.com/send?phone=+8801316987205' }
										iconNode={ <SiMedium
											className={ `mx-auto animate-bounce` } size={ 30 }
										/>
										}
										userId={ `01316987205` }
									/>
								</div>
							</div>

							{/* social block 2 */ }
							<div className={ `flex items-center gap-3` }>
								<div>
									<Contact_Card
										desSrc={ 'http://m.me/safin.ali.7205' }
										iconNode={ <SlSocialInstagram
											className={ `mx-auto animate-bounce` } size={ 30 }
										/>
										}
										userId={ `safin.ali.7205` }
									/>
								</div>
								<div>
									<Contact_Card
										desSrc={ 'http://m.me/safin.ali.7205' }
										iconNode={ <PiMessengerLogoLight
											className={ `mx-auto animate-bounce` } size={ 30 }
										/>
										}
										userId={ `safin.ali.7205` }
									/>
								</div>
								<div>
									<Contact_Card
										desSrc={ 'https://web.whatsapp.com/send?phone=+8801316987205' }
										iconNode={ <PiWhatsappLogoLight
											className={ `mx-auto animate-bounce` } size={ 30 }
										/>
										}
										userId={ `01316987205` }
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}