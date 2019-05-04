import { AbstractControl, ValidationErrors } from '@angular/forms';


export class UsernameValidators
{
    static CannotContainSpace(control: AbstractControl): ValidationErrors
    {
        if((control.value as string).indexOf(' ') >= 0)
            return {CannotContainSpace: true};
        return null;
    }

    static shouldBeUnique(control: AbstractControl) : Promise <ValidationErrors>
    {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value == 'mosh')
                    resolve ({shouldBeUnique: true});
                else
                    resolve(null);
            }, 2000)
        })
    }
}