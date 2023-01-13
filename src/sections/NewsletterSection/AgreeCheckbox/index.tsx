import { Checkbox } from "../../../components/Checkbox";

export const AgreeCheckbox = () => {
	return (
		<div>
			<label className='flex justify-center items-center gap-2 text-sm'>
				<Checkbox name='agree' />
				Concordo em receber comunicações
			</label>
		</div>
	);
};
