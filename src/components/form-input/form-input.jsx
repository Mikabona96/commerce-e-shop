import './form-input.scss'

const FormInput = ({ handleChange, label, ...props }) => {
	return (
		<div className="group">
			<input onChange={handleChange} type="text" className="form-input" {...props} />
		</div>
	)
}


export default FormInput