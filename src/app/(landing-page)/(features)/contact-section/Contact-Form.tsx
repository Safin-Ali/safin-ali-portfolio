'use client'
import React, { useState } from 'react';
import FloatingInputField from '@/components/Field/Floating-Input-Field';
import FloatingTextAreaField from '@/components/Field/Floating-Textarea-Field';
import PrimaryBtn from '@/components/Button/Primary-Btn';
import { RiSendPlaneFill } from 'react-icons/ri';
import ProcessingBtn, { AsyncTaskStatusType } from '@/components/Button/Processing-Btn';

interface FormType extends HTMLFormControlsCollection {
	subject: HTMLInputElement,
	name: HTMLInputElement,
	desc: HTMLInputElement,
	email: HTMLInputElement
};

interface CustomForm extends HTMLFormElement {
	elements: FormType
};

type InputFormType = React.FormEvent<CustomForm>;

interface AnimButtonType {
	reqeust: boolean,
	status:"ready" | AsyncTaskStatusType
}

export default function ContactForm() {

	const [animBool, setAnimBool] = useState<AnimButtonType>({
		reqeust: false,
		status:'ready'
	});

	const handleSendMessageForm = (e: InputFormType): void => {
		e.preventDefault();
		const form = e.currentTarget.elements;
		setTimeout(() => {
			setAnimBool({...animBool,status:'success'});
			setTimeout(() => {
				setAnimBool({reqeust:false,status:'ready'});
			},1700)
		},3000)

	};

	return (
		<form className={ `w-full` } onSubmit={ (e: InputFormType) => {
			handleSendMessageForm(e);
			setAnimBool({...animBool,reqeust: true});
		} }>
			<FloatingInputField
				type={ 'text' }
				name={ `subject` }
				className={ `bg-wh-block` }
			>
				Subject
			</FloatingInputField>

			<FloatingInputField
				type={ 'text' }
				name={ `name` }
				className={ `bg-wh-block` }
			>
				Your Name
			</FloatingInputField>

			<FloatingInputField
				type={ 'email' }
				name={ `email` }
				className={ `bg-wh-block` }
			>
				Your Email
			</FloatingInputField>

			<FloatingTextAreaField
				className={ `bg-wh-block top-5 resize-none` }
				rows={ 5 }
				name={ `desc` }

			>
				Message
			</FloatingTextAreaField>

			<PrimaryBtn
				className={ `px-5 py-2.5` }
				disabled={animBool.status !== 'ready' ? true : false}
			>
				<div className={ `overflow-hidden` }>
					{
						animBool.status === 'ready'
							?
								/* initial button or send button */
							<>
								<div
								className={ `email-send-btn flex-full-center ${animBool.reqeust ? '-translate-y-14' : ''}` }
								onTransitionEnd={() => setAnimBool({ ...animBool, status: 'pending' })}
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
										status={animBool.status}
									>
										{
											animBool.status === 'pending'
											?
											'Sending'
											:
											animBool.status ==='success'
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