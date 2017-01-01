declare namespace module {
	export namespace hot {
		export function accept(moduleName: string, callback: () => void): void;
	}
}
declare function require(moduleName: string): any;
declare module "react-hot-loader";
