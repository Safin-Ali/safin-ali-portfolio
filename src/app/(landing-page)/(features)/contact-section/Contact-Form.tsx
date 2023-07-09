'use client'
import React from 'react';
import FloatingInputField from '@/components/Field/Floating-Input-Field';
import FloatingTextAreaField from '@/components/Field/Floating-Textarea-Field';
import PrimaryBtn from '@/components/Button/Primary-Btn';
import { RiSendPlaneFill } from 'react-icons/ri';

interface FormType extends HTMLFormControlsCollection {
    subject: HTMLInputElement,
    name: HTMLInputElement,
    desc: HTMLInputElement,
    email: HTMLInputElement
};

interface CustomForm extends HTMLFormElement {
    elements: FormType
};

export default function ContactForm() {

    const handleSendMessageForm = (e: React.FormEvent<CustomForm>): void => {
        e.preventDefault();
        const form = e.currentTarget.elements;
    };

    return (
        <form className={`w-full`} onSubmit={ handleSendMessageForm }>
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
            >
                <div className={ `flex-full-center gap-2` }>
                    <div>Send Message</div>
                    <div>
                        <RiSendPlaneFill
                            size={ 20 }
                            className={ `mb-0.5` }
                        />
                    </div>
                </div>
            </PrimaryBtn>
        </form>
    );
};