import Button from "./_components/Button";
import ReadMoreButton from "./_components/ReadMoreButton";

export default function NotFound() {
    return (
        <>
          <div className="h-svh flex flex-col items-center justify-center">
            <img src="/404-computer.svg" width={400} height={500}/>
            
            <h3 className="my-6 sm:my-10  sm:text-3xl text-oceandepth font-bold items-center">We're sorry, but the Page you were looking for, couldn't be found.</h3>

            <Button background="azurePulse" href="/blog"> Go To Home</Button>
          </div>
        </>
    );
}