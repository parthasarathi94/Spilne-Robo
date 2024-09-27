import Image from "next/image";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-white text-center rounded p-6">
          <h1 className="text-4xl font-mono font-extrabold">Hello! I am NextRobo</h1>
          <p className="text-xl font-mono py-10 my-10 bg-blue-400 rounded-xl font-semibold">Meet NextRobo, the future of robotics! Packed with cutting-edge features, NextRobo is designed to revolutionize everyday tasks with intelligence and efficiency. Explore how innovation in robotics can enhance the way we live and work.</p>
          <p className="text-xl font-mono py-10 my-10 bg-green-400 rounded-xl font-semibold">Exploring the power of 3D design with Spline, this project showcases seamless integration of interactive 3D elements into modern web experiences. Dive in to see how immersive visuals can elevate any project!</p>
        </div>
        <div className="text-white text-center rounded p-6 h-screen">
          <Spline
            scene="https://prod.spline.design/XT9ytxldUfI7VNci/scene.splinecode"
          />
        </div>
      </div>
    </div>
  );
}
