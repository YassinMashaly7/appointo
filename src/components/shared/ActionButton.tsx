"use client";

import { ComponentPropsWithRef, ReactNode, useTransition } from "react";
import { Loader2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  addToast,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import { Button } from "../ui/button";

export function ActionButton({
  action,
  requireAreYouSure = false,
  ...props
}: Omit<ComponentPropsWithRef<typeof Button>, "onClick"> & {
  action: () => Promise<{ error: boolean; message: string }>;
  requireAreYouSure?: boolean;
}) {
  {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, startTransition] = useTransition();

    function performAction() {
      startTransition(async () => {
        const data = await action();
        addToast({ title: "Action made successfully!" });
      });
    }

    if (requireAreYouSure) {
      return (
        <>
          <Button {...props} onClick={onOpen} />
          <Modal
            isOpen={isOpen || isLoading ? true : undefined}
            onOpenChange={onOpenChange}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex w-full flex-col gap-2">
                    <h3>Are you sure?</h3>
                    <p>This action cannot be undone.</p>
                  </ModalHeader>
                  <ModalBody />
                  <ModalFooter>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button disabled={isLoading} onClick={performAction}>
                      <LoadingTextSwap isLoading={isLoading}>
                        Yes
                      </LoadingTextSwap>
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      );
    }

    return (
      <Button {...props} disabled={isLoading} onClick={performAction}>
        <LoadingTextSwap isLoading={isLoading}>
          {props.children}
        </LoadingTextSwap>
      </Button>
    );
  }
}

function LoadingTextSwap({
  isLoading,
  children,
}: {
  isLoading: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid items-center justify-items-center">
      <div
        className={cn(
          "col-start-1 col-end-2 row-start-1 row-end-2",
          isLoading ? "invisible" : "visible",
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "col-start-1 col-end-2 row-start-1 row-end-2 text-center",
          isLoading ? "visible" : "invisible",
        )}
      >
        <Loader2Icon className="animate-spin" />
      </div>
    </div>
  );
}
