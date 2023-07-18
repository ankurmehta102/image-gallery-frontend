import Input from '../components/Input';
import Button from '../components/Button';

function Signup() {
  const onSubmit = () => {
    console.log('submit clicked');
  };
  return (
    <div className="bg-black w-screen h-screen flex justify-center items-center">
      <div className="bg-black w-96 flex flex-col pb-5 border rounded-md border-primary">
        <div
          id="header"
          className="text-white flex justify-center items-center border-b-0.5 border-primary bg-primary rounded-t"
        >
          <h1 className="text-2xl py-7 text-black">Create a new account</h1>
        </div>
        <div
          id="content"
          className="flex flex-col items-center text-white pt-5 "
        >
          <div className="flex w-11/12 justify-end">
            <div className="flex justify-start">
              <Input type="text" placeholder="Firstname" />
            </div>
            <div className="flex justify-end">
              <Input type="text" placeholder="Lastname" />
            </div>
          </div>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />
          <Button type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
