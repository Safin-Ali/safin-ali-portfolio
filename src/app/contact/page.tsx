import Primary_Btn from '@/components/CSR/Button/Primary_Btn';
import Floating_Input_Field from '@/components/SSR/Card/Floating_Input_Field';
import Floating_Textarea_Field from '@/components/SSR/Card/Floating_Textarea_Field';
import { SlSocialLinkedin } from "react-icons/sl";
import { PiMessengerLogoLight, PiWhatsappLogoLight } from "react-icons/pi";
import React from 'react';
import Contact_Card from '@/components/CSR/Card/Contact_Card';

export default function Page() {

	return (
		<div className={ `flex-full-center h-screen relative` }>
			<div className={ `w-full` }>
				<div className={ `content_header` }>
					Contact With Me
				</div>
				<div className={`text-center`}>
				Feel free to Contact me by submitting the form
				or social media below
				<br />
				and I will get back to you as soon as possible
				</div>
				<div className={ `flex-full-center h-full relative` }>
					{/* contact via email */ }
					<div className={ `basis-full` }>
						<div className={ `w-1/2 mx-auto` }>
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

					{/* contatct with easily */ }
					<div className={ `basis-full flex-full-center gap-3` }>
						<div>
							<Contact_Card
								desSrc={'https://www.linkedin.com/in/safin-ali/'}
								iconNode={ <SlSocialLinkedin
									className={ `mx-auto animate-bounce` } size={ 25 }
								/>
								}
								userId={ `safin-ali` }
							/>
						</div>
						<div>
							<Contact_Card
								desSrc={'http://m.me/safin.ali.7205'}
								iconNode={ <PiMessengerLogoLight
									className={ `mx-auto animate-bounce` } size={ 30 }
								/>
								}
								userId={ `safin.ali.7205` }
							/>
						</div>
						<div>
							<Contact_Card
								desSrc={'https://web.whatsapp.com/send?phone=+8801316987205'}
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
	);
}