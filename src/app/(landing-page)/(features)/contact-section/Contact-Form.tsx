'use client'
import React, { useState } from 'react';
import FloatingInputField from '@/components/Field/Floating-Input-Field';
import FloatingTextAreaField from '@/components/Field/Floating-Textarea-Field';
import PrimaryBtn from '@/components/Button/Primary-Btn';
import { RiSendPlaneFill } from 'react-icons/ri';
import ProcessingBtn, { AsyncTaskStatusType } from '@/components/Button/Processing-Btn';
import API from '@/utilities/fetch-data';

interface FormElementsType extends HTMLFormControlsCollection {
	subject: HTMLInputElement,
	name: HTMLInputElement,
	desc: HTMLInputElement,
	email: HTMLInputElement
};

interface CustomForm extends HTMLFormElement {
	elements: FormElementsType
};

type InputFormType = React.FormEvent<CustomForm>;

interface AnimButtonType {
	reqeust: boolean,
	status: "ready" | AsyncTaskStatusType
}

export default function ContactForm() {

	const [animBool, setAnimBool] = useState<AnimButtonType>({
		reqeust: false,
		status: 'ready'
	});

	const handleSendMessageForm = async (e: InputFormType): Promise<void> => {

		const reset = () => setTimeout(() => {
			setAnimBool({ reqeust: false, status: 'ready' });
			const currForm = e.target as HTMLFormElement;
			currForm.reset()
		}, 1700);

		try {
			e.preventDefault();

			const { email, desc, name, subject } = e.currentTarget.elements;

			const formObj = {
				emailSub: subject.value,
				senderName: name.value,
				senderEmail: email.value,
				emailDesc: desc.value,
			};

			await API.post('sendEmail',formObj,{
				'Content-Type': 'application/json'
			});

			setAnimBool({ ...animBool, status: 'success' });
			reset()
		} catch (err) {
			setTimeout(() => {
				console.log(err);

				setAnimBool({ ...animBool, status: 'error' });
				reset();
			}, 3000);
		}

	};

	return (
		<form className={ `w-full` } onSubmit={ (e: InputFormType) => {
			handleSendMessageForm(e);
			setAnimBool({ ...animBool, reqeust: true });
		} }>
			<FloatingInputField
				type={ 'text' }
				name={ `subject` }
				className={ `bg-wh-block` }
				autoComplete={'off'}
				required
			>
				Subject
			</FloatingInputField>

			<FloatingInputField
				type={ 'text' }
				name={ `name` }
				className={ `bg-wh-block` }
				required
			>
				Your Name
			</FloatingInputField>

			<FloatingInputField
				type={ 'email' }
				name={ `email` }
				className={ `bg-wh-block` }
				required
			>
				Your Email
			</FloatingInputField>

			<FloatingTextAreaField
				className={ `bg-wh-block top-5 resize-none` }
				rows={ 5 }
				name={ `desc` }
				required
			>
				Message
			</FloatingTextAreaField>

			<PrimaryBtn
				className={ `px-5 py-2.5` }
				disabled={ animBool.status !== 'ready' ? true : false }
			>
				<div className={ `overflow-hidden` }>
					{
						animBool.status === 'ready'
							?
							/* initial button or send button */
							<>
								<div
									className={ `email-send-btn flex-full-center ${animBool.reqeust ? '-translate-y-14' : ''}` }
									onTransitionEnd={ () => setAnimBool({ ...animBool, status: 'pending' }) }
								>
									<div>Send message</div>
									<div>
										<RiSendPlaneFill
											size={ 20 }
											className={ `mb-0.5` }
										/>
									</div>
								</div>
							</>
							:
							<>
								<div className={ `animate-slide-up pointer-events-none translate-y-14` }>
									<ProcessingBtn
										status={ animBool.status }
									>
										{
											animBool.status === 'pending'
												?
												'Sending'
												:
												animBool.status === 'success'
													?
													'Sent'
													:
													'Failed'
										}
									</ProcessingBtn>
								</div>
							</>
					}
				</div>
			</PrimaryBtn>
		</form>
	);
};