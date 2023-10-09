import type { FormikConfig } from 'formik'
import { Formik, Form as FormikForm } from 'formik'
import type { FC, PropsWithChildren } from 'react'

const Form: FC<
	PropsWithChildren<
		Pick<FormikConfig<any>, 'initialValues' | 'validationSchema' | 'onSubmit'>
	>
> = ({ initialValues, validationSchema, onSubmit, children }) => {
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
		>
			<FormikForm>{children}</FormikForm>
		</Formik>
	)
}

export default Form
