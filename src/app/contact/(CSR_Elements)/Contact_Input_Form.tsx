'use client';
import React, { FormEvent, useState } from 'react';
import Primary_Btn from '@/components/CSR/Button/Primary_Btn';
import Floating_Input_Field from '@/components/SSR/Card/Floating_Input_Field';
import Floating_Textarea_Field from '@/components/SSR/Card/Floating_Textarea_Field';
import { API } from '@/utils/http-fetcher';
import Spinner from '@/components/SSR/Loader/Spinner';

export default function Contact_Input_Form() {

	const [isLoading, setLoading] = useState<boolean>(false);

	const handleForm = async (e: FormEvent<HTMLFormElement>) => {
		try {
			e.preventDefault();

			const formData = new FormData(e.currentTarget);

			const rawFormData = {
				emailSub: formData.get('emailSub')!,
				senderName: formData.get('senderName')!,
				senderEmail: formData.get('senderEmail')!,
				emailDesc: formData.get('emailDesc')!,
			}

			setLoading(true);

			const res = await API.post(`sendEmail`, {
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(rawFormData)
			})
		} catch (err) {

		} finally {
			await new Promise(res => {
				setLoading(false);
					(e.target as HTMLFormElement).reset()
					res(true)
			})
		}
	}

	return (
		<form onSubmit={ handleForm }>
			<Floating_Input_Field
				labelVal={ 'Subject' }
				className={`${isLoading ? 'opacity-50' : ''}`}
				type={ 'text' }
				name={ 'emailSub' }
				autoComplete={ 'off' }
				disabled={ isLoading }
				required
			/>
			<Floating_Input_Field
				labelVal={ 'Your Name' }
				className={`${isLoading ? 'opacity-50' : ''}`}
				type={ 'text' }
				name={ 'senderName' }
				disabled={ isLoading }
				required
			/>
			<Floating_Input_Field
				labelVal={ 'Your Email' }
				className={`${isLoading ? 'opacity-50' : ''}`}
				type={ 'email' }
				name={ 'senderEmail' }
				disabled={ isLoading }
				required
			/>
			<Floating_Textarea_Field
				labelVal={ 'Message' }
				rows={ 5 }
				maxLength={ 500 }
				className={ `resize-none ${isLoading ? 'opacity-50' : ''}` }
				name={ 'emailDesc' }
				disabled={ isLoading }
				required
			/>
			<div>
				{
					isLoading
						?
						<div className={`flex-full-center gap-x-1.5 primary_btn w-fit`}>
							<div>Sending</div>
							<div>
								<Spinner
									className={`w-5 h-5`}
								/>
							</div>
						</div>
						:
						<Primary_Btn
							className={ `px-6` }
						>
							Sent
						</Primary_Btn>

				}
			</div>
		</form>
	);
}