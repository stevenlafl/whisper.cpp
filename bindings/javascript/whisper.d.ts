// Define the structure of the module's export.
interface Whisper {
  FS_createPath: (parent: string, path: string, canRead?: boolean, canWrite?: boolean) => void;
  FS_createDataFile: (parent: string, name: string, data: Uint8Array, canRead?: boolean, canWrite?: boolean, canOwn?: boolean) => void;
  FS_createPreloadedFile: (
    parent: string,
    name: string,
    url: string,
    canRead?: boolean,
    canWrite?: boolean,
    onload?: () => void,
    onerror?: () => void,
    dontCreateFile?: boolean,
    canOwn?: boolean
  ) => void;
  FS_createLazyFile: (parent: string, name: string, url: string, canRead?: boolean, canWrite?: boolean) => void;
  FS_createDevice: (parent: string, name: string, input?: () => void, output?: (data: Uint8Array) => void) => void;
  FS_unlink: (path: string) => void;
  init(modelPath: string): boolean;
    full_default(
      pcm: Float32Array,
      languageCode: string,
      verbose: boolean
  ): number;

  get_text(): string;
  free(): void;
}

declare function whisper_factory(): Promise<Whisper>;
export = whisper_factory;