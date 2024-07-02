<div class="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4] dark:bg-token-main-surface-secondary">
  <div class="flex items-end gap-1.5 md:gap-2">
    <div>
      <div class="flex flex-col">
        <input multiple="" type="file" tabindex="-1" class="hidden" style="display: none;">
        <button type="button" id="radix-:rc:" aria-haspopup="menu" aria-expanded="false" data-state="closed" class="text-token-text-primary border border-transparent inline-flex items-center justify-center gap-1 rounded-lg text-sm dark:transparent dark:bg-transparent leading-none outline-none cursor-pointer hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-state-active:text-token-text-secondary radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent m-0 h-0 w-0 border-none bg-transparent p-0"></button>
        <button class="flex items-center justify-center text-token-text-primary juice:h-8 juice:w-8 dark:text-white juice:rounded-full focus-visible:outline-black dark:focus-visible:outline-white juice:mb-1 juice:ml-1.5" aria-disabled="false">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path fill="currentColor" fill-rule="evenodd" d="M9 7a5 5 0 0 1 10 0v8a7 7 0 1 1-14 0V9a1 1 0 0 1 2 0v6a5 5 0 0 0 10 0V7a3 3 0 1 0-6 0v8a1 1 0 1 0 2 0V9a1 1 0 1 1 2 0v6a3 3 0 1 1-6 0z" clip-rule="evenodd"></path>
          </svg>
        </button>
        <div type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:re:" data-state="closed"></div>
      </div>
    </div>
    <div class="flex min-w-0 flex-1 flex-col">
      <textarea id="prompt-textarea" tabindex="0" data-id="caec8496-039d-485b-ad09-4d7179a869a6" dir="auto" rows="1" placeholder="Message ChatGPT" class="m-0 resize-none border-0 bg-transparent px-0 text-token-text-primary focus:ring-0 focus-visible:ring-0 max-h-[25dvh] max-h-52" style="height: 40px; overflow-y: hidden;"></textarea>
    </div>
    <button data-testid="fruitjuice-send-button" class="mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary" disabled="">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 32 32" class="icon-2xl">
        <path fill="currentColor" fill-rule="evenodd" d="M15.192 8.906a1.143 1.143 0 0 1 1.616 0l5.143 5.143a1.143 1.143 0 0 1-1.616 1.616l-3.192-3.192v9.813a1.143 1.143 0 0 1-2.286 0v-9.813l-3.192 3.192a1.143 1.143 0 1 1-1.616-1.616z" clip-rule="evenodd"></path>
      </svg>
    </button>
  </div>
</div>