import "./scro.css";

export default function Scroll() {

  return (
    <div>
      <div  />
      <button id='btn'
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
          <i class="bi bi-arrow-up-circle"></i>
      </button>
    </div>
  );
}